import PersonCard from "../../component/Card/Person"
import SearchByLocation from "../../component/UserDashboard/SearchUsers";
import UserSection from "../../component/UserDashboard/UserSection";
import Layout from "../../Layout/Layout";
const Explore = () => {
    const followers = [
    { name: 'Alice Brown', username: '@alicebrown' },
    { name: 'Chris Green', username: '@chrisgreen' },
    // Add more followers...
  ];
   const handlefollow = (username: string) => {
    // Handle unfollow logic here
    console.log(`Unfollowed: ${username}`);
  };
  return (
    <Layout>

    <div className="md:pl-40 lg:pl-56 xl:pl-72 pt-20 mb-20 md:mb-0 bg-sec2 min-h-screen flex">
        <div className="w-full px-8 lg:w-2/3 mt-20">
            <UserSection />
        </div>
        <div className='w-1/3 hidden lg:flex fixed top-20 right-[-15px]'>
            <SearchByLocation />
        </div>
    </div>
    </Layout>

  )
}

export default Explore