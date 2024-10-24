import React from 'react';
import {Heading, Text} from "../Texts"
interface ProfileStatsProps {
  followingCount: number;
  followerCount: number;
}

const ProfileStats: React.FC<ProfileStatsProps> = ({ followingCount, followerCount }) => {
  return (
    <div className="flex space-x-4 p-4 text-primary2 font-body">
      <Text><strong>{followingCount}</strong> Following</Text>
      <Text><strong>{followerCount}</strong> Followers</Text>
    </div>
  );
};

export default ProfileStats;
