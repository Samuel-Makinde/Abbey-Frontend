import React from 'react';
import {Heading, Text} from "../Texts"

interface PersonCardProps {
  name: string;
  username: string;
  showUnfollow?: boolean; 
  onUnfollow?: () => void;
  showfollow?: boolean; 
  follow?: () => void; 
  viewProfile?: () => void
  showProfile: boolean

}

const PersonCard: React.FC<PersonCardProps> = ({ name, username, showUnfollow, onUnfollow, showfollow, follow, viewProfile, showProfile }) => {
  return (
    <div className="flex justify-between items-center bg-ter1 p-4 rounded-lg mb-2">
      <div>
        <Heading level={4} className="font-semibold text-primary2 text-lg">{name}</Heading>
        <Text className="text-ter2">{username}</Text>
      </div>
     <div>

      {showUnfollow && onUnfollow && (
        <button className="text-primary1 p-4 rounded-md bg-primary3" onClick={onUnfollow}>
          Unfollow
        </button>
      )}
       {showfollow && follow && (
        <button className="text-primary1 p-4  rounded-md bg-primary4" onClick={follow}>
          Follow
        </button>
      )}
       {showProfile && viewProfile && (
        <button className="text-primary1 p-4 ml-5 rounded-md bg-primary3" onClick={viewProfile}>
          View Profile
        </button>
      )}
     </div>

    </div>
  );
};

export default PersonCard;
