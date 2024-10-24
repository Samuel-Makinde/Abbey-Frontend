import React from 'react';
import { FaRegCalendarAlt } from "react-icons/fa";
import { Text} from "../Texts"

interface UserInfoSection {
  date: string;
}
const UserInfoSection: React.FC<UserInfoSection> = ({date}) => {
  return (
    <div className="p-4 text-gray-500 ml-4 font-body">
      <Text className='flex'> <FaRegCalendarAlt /> <span className='ml-3'>{date}</span> </Text>
    </div>
  );
};

export default UserInfoSection;
