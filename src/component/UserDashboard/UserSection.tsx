import PersonCard from "../Card/Person"
import React, { useState } from 'react';
import { Heading, Text } from "../Texts";
import api from "../../api/dashboardApi"; 
import { showToast } from '../showToast';


 interface User {
  id: number; 
  name: string;
  fullname: string;
  username: string;
  email: string;
  bio: string;
  country: string;
  state: string;
  createdAt: string;
}

// Define props for UserSection
interface UserSectionProps {
  data: User[];
  followerId: number | null; 
  accessToken: string | null; 
  refreshToken: string | null; 
}

const UserSection: React.FC<UserSectionProps>  = ({data, followerId, accessToken, refreshToken}) => {


//  const [followedUsers, setFollowedUsers] = useState<number[]>([]); 
  const [loading, setLoading] = useState<number | null>(null); 

  // Function to handle the follow button click
  const handleFollow = async (followingId: number) => {
    setLoading(followingId); // Set loading state
    try {
      // Call the API to follow the user
      const response = await api.followUsers({ accessToken, refreshToken, followingId, followerId });
      // setFollowedUsers((prev) => [...prev, followingId]); 
      showToast(response.data.message, "success"); 
    } catch (error) {
      console.error('Error following user:', error);
      showToast("Error following user", "error"); 
    } finally {
      setLoading(null); 
    }
  };


  return (
    <div className="w-full ">
        <Heading level={2} className="text-lg font-semibold pb-4">Connect with People near you and beyond</Heading>
          <div className="w-full">
          {data.length > 0 ? (
            data.map((person) => (
              <PersonCard
                key={person.username}
                name={person.fullname}
                username={person.username}
               showfollow={true} 
               bio={person.bio}
               createdAt={person.createdAt}
              follow={() => handleFollow(person.id)} 
              isLoading={loading === person.id} 
              />
            ))
          ) : (
            <Text className="text-primary2">Hold on while we get friends for you...</Text>
          )}
        </div>
    </div>

  )
}

export default UserSection