import React from 'react';
import {Heading, Text} from "../Texts"
import { DateConverter } from '../../helper/dateConverter';

interface PersonCardProps {
  name: string;
  username: string;
  bio: string;
  createdAt: string;
  showUnfollow?: boolean; 
  onUnfollow?: () => void;
  showfollow?: boolean; 
  follow?: () => void; 
  isLoading: boolean;
}

const PersonCard: React.FC<PersonCardProps> = ({ name, username, showUnfollow, onUnfollow, showfollow, follow, bio, createdAt, isLoading  }) => {

  return (
    <div className="md:flex justify-between items-center bg-ter1 p-4 rounded-lg mb-2">
      <div>
        <Heading level={4} className="font-semibold text-primary2 text-lg">{name}</Heading>
        <Text className="text-ter2">@{username}</Text>
        <Text className="text-ter2">bio: {bio}</Text>
        <Text className="text-ter2">Joined: {DateConverter(createdAt)}</Text>
      </div>
     <div>

      {showUnfollow && onUnfollow && (
        <button className="text-primary1 mt-7 md:mt-0 p-4 rounded-md bg-primary3" onClick={onUnfollow}>
          {isLoading ? "Processing" : "Unfollow"}
        </button>
      )}
       {showfollow && follow && (
        <button className={`text-primary1 p-4   mt-7 md:mt-0 rounded-md bg-primary4`} onClick={follow}
        disabled={ isLoading}
        >
          {isLoading ? "Processing": "Follow"}
        </button>
      )}
      
     </div>

    </div>
  );
};

export default PersonCard;
