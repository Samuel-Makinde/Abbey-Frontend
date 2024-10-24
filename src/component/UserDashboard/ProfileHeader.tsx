import React from 'react';
import {Heading, Text} from "../Texts"

interface ProfileHeaderProps {
  userName: string;
  userHandle: string;
  avatarUrl: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ userName, userHandle, avatarUrl }) => {
  return (
    <div className=" flex items-center space-x-4 p-4 mt-10 font-body">
      <img src={avatarUrl} alt="User Avatar" className="w-20 h-20 rounded-full" />
      <div>
        <Heading level={2} className="text-2xl font-semibold text-primary2">{userName} <span className="text-primary3">✔️</span></Heading>
        <Text className="text-primary3">@{userHandle}</Text>
      </div>
    </div>
  );
};

export default ProfileHeader;
