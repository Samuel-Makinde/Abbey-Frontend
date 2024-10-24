
import React, { useState } from 'react';
import PersonCard from '../Card/Person'; 
import { Text} from "../Texts"

const TabsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Following' | 'Followers'>('Following');

  const following = [
    { name: 'John Doe', username: '@johndoe' },
    { name: 'Jane Smith', username: '@janesmith' },
    // Add more following users...
  ];

  const followers = [
    { name: 'Alice Brown', username: '@alicebrown' },
    { name: 'Chris Green', username: '@chrisgreen' },
    // Add more followers...
  ];
  const tabs = ['Following', 'Followers'];
  const handleUnfollow = (username: string) => {
    // Handle unfollow logic here
    console.log(`Unfollowed: ${username}`);
  };

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
            onClick={() => setActiveTab(tab)}
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
                name={person.name}
                username={person.username}
                showUnfollow={true} 
                onUnfollow={() => handleUnfollow(person.username)} 
                showProfile={true}
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
                name={person.name}
                username={person.username}
                showProfile={true}
                showUnfollow={false} // No Unfollow button for followers
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
