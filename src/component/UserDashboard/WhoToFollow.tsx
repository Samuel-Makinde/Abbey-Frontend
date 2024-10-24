import React, { useState } from 'react';
import {Heading, Text} from "../Texts"
// Sample data of users to follow
const suggestions = [
  { name: 'Jane Doe', username: '@janedoe' },
  { name: 'Michael Smith', username: '@michaelsmith' },
  { name: 'Anna Johnson', username: '@annajohnson' },
];

const WhoToFollow: React.FC = () => {
  const [followedUsers, setFollowedUsers] = useState<string[]>([]);

  // Function to handle the follow button click
  const handleFollow = (username: string) => {
    setFollowedUsers([...followedUsers, username]); // Add username to the followedUsers array
  };

  return (
    <div className="w-full  h-80 max-w-xs bg-primary3 mt-20 rounded-lg shadow-lg p-4 ">
        <div>

      <Heading level={2} className="text-lg font-bold mb-4">People near you</Heading>

      {suggestions.map((user) => (
        <div key={user.username} className="flex justify-between items-center mb-4">
          <div>
            <Heading level={4} className="font-semibold">{user.name}</Heading>
            <Text  className="text-ter4">{user.username}</Text>
          </div>
          <button
            className={`px-4 py-1 bg-sec2 text-primary2 rounded-full text-sm ${
              followedUsers.includes(user.username) ? 'bg-sec2 ' : 'bg-primary3 '
            }`}
            onClick={() => handleFollow(user.username)}
            disabled={followedUsers.includes(user.username)} // Disable button if already followed
          >
            {followedUsers.includes(user.username) ? 'Following' : 'Follow'}
          </button>
        </div>
      ))}

      <div className="mt-4 text-primary3 hover:underline cursor-pointer">
        <Text  className="text-ter4">Show More</Text>
      </div>
        </div>

    </div>
  );
};

export default WhoToFollow;
