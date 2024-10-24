// import Layout from "../../Layout/Layout"
// import ProfileHeader from "../../component/UserDashboard/ProfileHeader"
// import person from "../../assets/person.png"
// const Profile = () => {
//   return (
//     <Layout>
//         <div>
//             <ProfileHeader 
//              userName="samuel" 
//              userHandle="@samuel" 
//              avatarUrl={person}
//              />
//         </div>

//     </Layout>
//   )
// }

// export default Profile

import React from 'react';
import ProfileHeader from '../../component/UserDashboard/ProfileHeader';
import ProfileStats from '../../component/UserDashboard/ProfileStats';
import TabsSection from '../../component/UserDashboard/TabSection';
import UserInfoSection from '../../component/UserDashboard/UserInfo';
import WhoToFollow from '../../component/UserDashboard/WhoToFollow';
import Layout from "../../Layout/Layout"

const DashboardLayout: React.FC = () => {
  const suggestions = [
    { name: 'Samir Makwana', handle: 'SamirMakwana', avatarUrl: 'https://via.placeholder.com/150' }
    // Add more user suggestions here
  ];

  return (
    <Layout>

    <div className="md:pl-40 lg:pl-56 xl:pl-72 mt-20 mb-20 md:mb-0  text-primary1 min-h-screen flex">
        <div className='w-full lg:w-2/3 '>

      {/* Profile Header */}
      <ProfileHeader
        userName="Samuel Tobi Makinde"
        userHandle="SamuelTobi953"
        avatarUrl="https://via.placeholder.com/150"
      />

      {/* User Info Section */}
      <UserInfoSection  date="Joined March 2023" />

      {/* Profile Stats */}
      <ProfileStats followingCount={20} followerCount={9} />

      {/* Tabs */}
      <TabsSection />

        </div >
        <div className='w-1/3 hidden lg:flex '>
      {/* Who to Follow Section */}
      <WhoToFollow  />
        </div>

    </div>
    </Layout>

  );
};

export default DashboardLayout;
