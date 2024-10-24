import React, { useState } from 'react';
import { Heading, Text } from "../Texts";
import api from "../../api/dashboardApi"; 
import { showToast } from '../showToast';

// Define the User interface
interface UserNew {
  id: number ; 
  fullname: string;
  username: string;
}

// Define the WhoToFollowProps interface
interface WhoToFollowProps {
  userss: UserNew[];
  followerId: number | null; 
  accessToken: string | null; 
  refreshToken: string | null; 
}

const WhoToFollow: React.FC<WhoToFollowProps> = ({ userss, followerId, accessToken, refreshToken }) => {
  const [followedUsers, setFollowedUsers] = useState<number[]>([]); 
  const [loading, setLoading] = useState<number | null>(null); 

  // Function to handle the follow button click
  const handleFollow = async (followingId: number) => {
    setLoading(followingId); 
    try {
      const response = await api.followUsers({ accessToken, refreshToken, followingId, followerId });
      setFollowedUsers((prev) => [...prev, followingId]); 
      showToast(response.data.message, "success")
    } catch (error) {
      console.error('Error following user:', error);
    } finally {
      setLoading(null); 
    }
  };

  return (
    <div className="w-full h-96 max-w-xs bg-primary3 mt-20 rounded-lg shadow-lg p-4">
      <div>
        <Heading level={2} className="text-lg font-bold mb-4">People near you</Heading>

        {userss.slice(0, 3).map((user) => (
          <div key={user.id} className="flex bg-sec1 p-3 rounded-md justify-between items-center mb-4">
            <div>
              <Heading level={4} className="font-normal text-base text-primary2">{user.fullname}</Heading>
              <Text className="text-ter2">@{user.username}</Text>
            </div>
            <button
              className={`px-4 py-1 text-primary2 rounded-full text-sm ${
                loading === user.id ? 'bg-gray-400' : followedUsers.includes(user.id) ? 'bg-sec2' : 'bg-primary3'
              }`}
              onClick={() => handleFollow(user.id)} 
              disabled={followedUsers.includes(user.id) || loading === user.id} 
            >
              {loading === user.id ? 'Loading...' : followedUsers.includes(user.id) ? 'Following' : 'Follow'}
            </button>
          </div>
        ))}

        {userss.length > 3 && (
          <div className="mt-4 text-sec1 hover:underline cursor-pointer">
            <Text className="text-primary2">Show More</Text>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhoToFollow;
