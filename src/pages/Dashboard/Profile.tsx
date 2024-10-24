import React, { useEffect, useState } from 'react';
import ProfileHeader from '../../component/UserDashboard/ProfileHeader';
import ProfileStats from '../../component/UserDashboard/ProfileStats';
import TabsSection from '../../component/UserDashboard/TabSection';
import UserInfoSection from '../../component/UserDashboard/UserInfo';
import WhoToFollow from '../../component/UserDashboard/WhoToFollow';
import Layout from "../../Layout/Layout"
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { DateConverter } from '../../helper/dateConverter';
import api from "../../api/dashboardApi"
import { AuthTokens } from '../../type/authTypes';
import { useNavigate } from "react-router-dom";
import { User } from '../../type/authTypes';

interface UserFollow { id: number; fullName: string; username: string; bio: string; createdAt: string  }
const DashboardLayout: React.FC = () => {

   const [follow, setfollowers] = useState<UserFollow[]>([]);
   const [following, setfollowing] = useState<UserFollow[]>([]);
   const [users, setUsers] = useState<User[]>([]);
 
 const navigate = useNavigate()

 const authState = useSelector((state: RootState) => state.auth);

 useEffect(() => {
    if (!authState.user) {
      navigate("/"); 
    }
  }, [authState.user, navigate]);


  // Create the AuthTokens object only if the user is available
  const auth: AuthTokens = {
    accessToken: authState.accessToken,
    refreshToken: authState.refreshToken,
    user: authState.user,
 
  };

  // const userId = auth.user.userId; 
  const userId = auth.user ? auth.user.userId : null; 
  const { accessToken, refreshToken,  } = auth;

   useEffect(() => {
    const getFollowers = async () => {
       
      try {
        const response = await api.getFollower({
          accessToken,
          refreshToken,
          userId,
        });
        setfollowers(response.data);
      } catch (error) {
        console.error("Could not get users:", error);
      }
    };
    if (userId) {
      getFollowers();
    }
    // getAllUsers();
  }, [accessToken, refreshToken, userId]);

  // to get following
     useEffect(() => {
    const getFollowings = async () => {
       
      try {
        const response = await api.getFollowing({
          accessToken,
          refreshToken,
          userId,
        });
        setfollowing(response.data);
      } catch (error) {
        console.error("Could not get users:", error);
      }
    };
    if (userId) {
      getFollowings();
    }
    // getAllUsers();
  }, [accessToken, refreshToken, userId]);

   const user = authState.user;

   // who to follow 
    useEffect(() => {
    const getAllUsers = async () => {
       
      try {
        const response = await api.getAllUsers({
          accessToken,
          refreshToken,
          userId,
        });
        setUsers(response.data);
      } catch (error) {
        console.error("Could not get users:", error);
      }
    };
    if (userId) {
      getAllUsers();
    }
    // getAllUsers();
  }, [accessToken, refreshToken, userId]);


  const transformedUsers = users.map(user => ({
  id: user.userId,        
  fullname: user.fullName, 
  username: user.username, 
}));

  return (
    <Layout>

    <div className="md:pl-40 lg:pl-56 xl:pl-72 mt-20 mb-20 md:mb-0  text-primary1 min-h-screen flex">
        <div className='w-full lg:w-2/3 '>

      {/* Profile Header */}
      {user && (
            <ProfileHeader
              userName={user.fullName}
              userHandle={user.username}
              avatarUrl={ "https://via.placeholder.com/150"} 
            />
          )}

      {/* User Info Section */}
      {user && (
      <UserInfoSection  date={DateConverter(user.createdAt || "")} />
       )}

      {/* Profile Stats */}
      {user && (
      <ProfileStats followingCount={following.length} followerCount={follow.length} />
       )}
      {/* Tabs */}
      {user && (
      <TabsSection following={following} followers={follow} followerId={userId} accessToken={accessToken} refreshToken={refreshToken}/>
       )}
        </div >
        <div className='w-1/3 hidden lg:flex '>
      {/* Who to Follow Section */}
        {user && (
      <WhoToFollow userss={transformedUsers} followerId={userId} accessToken={accessToken} refreshToken={refreshToken} />
        )}
        </div>

    </div>
    </Layout>

  );
};

export default DashboardLayout;
