import React, { useState } from 'react';
import PersonCard from '../Card/Person'; 
import { Text } from "../Texts";
import api from "../../api/dashboardApi"; 
import { showToast } from '../showToast'; 


// Define the props type for TabsSection
interface TabsSectionProps {
  following: { id: number; fullName: string; username: string; bio: string; createdAt: string }[];
  followers: { id: number; fullName: string; username: string; bio: string; createdAt: string }[];
  followerId: number | null; 
  accessToken: string | null; 
  refreshToken: string | null; 
}

const TabsSection: React.FC<TabsSectionProps> = ({ following, followers, followerId, accessToken, refreshToken }) => {
  const [activeTab, setActiveTab] = useState<'Following' | 'Followers'>('Following');
  const [followedUsers, setFollowedUsers] = useState<number[]>(following.map(person => person.id)); 
  const [loading, setLoading] = useState<number | null>(null); 

  // const tabs = ['Following', 'Followers'];

  // Function to handle following a user
  const handleFollow = async (followingId: number) => {
    setLoading(followingId); // Set loading state
    try {
      const response = await api.followUsers({ accessToken, refreshToken, followingId, followerId });
      setFollowedUsers((prev) => [...prev, followingId]); 
      showToast(response.data.message, "success");
    } catch (error) {
      console.error('Error following user:', error);
      showToast("Error following user", "error");
    } finally {
      setLoading(null); 
    }
  };

  // Function to handle unfollowing a user
  const handleUnfollow = async (followingId: number) => {
    setLoading(followingId); 
    try {
      const response = await api.unFollowUsers({ accessToken, refreshToken, followingId, followerId });
      setFollowedUsers((prev) => prev.filter(id => id !== followingId)); 
      showToast(response.data.message, "success");
    } catch (error) {
      console.error('Error unfollowing user:', error);
      showToast("Error unfollowing user", "error");
    } finally {
      setLoading(null); 
    }
  };

  type Tab = "Following" | "Followers";

const tabs: Tab[] = ["Following", "Followers"];

  return (
    <div className="p-4 font-body">
      {/* Tab navigation */}
      <nav className="flex space-x-8 p-4 border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`text-sec3 hover:text-primary2 ${
              activeTab === tab ? 'text-primary2 font-bold border-b-2 border-primary3' : ''
            }`}
            onClick={() => setActiveTab(tab as Tab)}
          >
            {tab}
          </button>
        ))}
      </nav>
      <div className='mt-5'>
        {activeTab === 'Following' && (
          <div>
            {following.length > 0 ? (
              following.map((person) => (
                <PersonCard
                  key={person.username}
                  name={person.fullName}
                  username={person.username}
                  bio={person.bio}
                  createdAt={person.createdAt}
                  showUnfollow={true}
                  onUnfollow={() => handleUnfollow(person.id)} 
                  isLoading={loading === person.id} 
                />
              ))
            ) : (
              <Text className="text-primary2">You are not following anyone yet.</Text>
            )}
          </div>
        )}

        {activeTab === 'Followers' && (
          <div>
            {followers.length > 0 ? (
              followers.map((person) => (
                <PersonCard
                  key={person.username}
                  name={person.fullName}
                  username={person.username}
                  bio={person.bio}
                  createdAt={person.createdAt}
                  showUnfollow={!followedUsers.includes(person.id)} 
                  follow={() => handleFollow(person.id)} 
                  isLoading={loading === person.id} 
                />
              ))
            ) : (
              <Text className="text-primary2">You don't have any followers yet.</Text>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TabsSection;
