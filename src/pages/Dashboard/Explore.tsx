/* eslint-disable @typescript-eslint/no-explicit-any */
import SearchByLocation from "../../component/UserDashboard/SearchUsers";
import UserSection from "../../component/UserDashboard/UserSection";
import Layout from "../../Layout/Layout";
import api from "../../api/dashboardApi"
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { RootState } from "../../store";
import { AuthTokens } from '../../type/authTypes';
import { useNavigate } from "react-router-dom";

interface User {
  id: number; 
  name: string;
  fullname: string;
  username: string;
  email: string;
  bio: string;
  country: string;
  state: string;
  createdAt: string
}

const Explore = () => {

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

  

  return (
    <Layout>
    <div className="md:pl-40 lg:pl-56 xl:pl-72 pt-20 pb-20 md:mb-0 bg-sec2 min-h-screen flex">
        <div className="w-full px-8 lg:w-2/3 mt-20">
            <UserSection data={users} followerId={userId} accessToken={accessToken} refreshToken={refreshToken} />
        </div>
        {/* <div className='w-1/3 hidden lg:flex fixed top-20 right-[-15px]'>
            <SearchByLocation />
        </div> */}
    </div>
    </Layout>

  )
}

export default Explore

