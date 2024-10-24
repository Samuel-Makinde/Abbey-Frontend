import PersonCard from "../Card/Person"
import {Heading, Text} from "../Texts"


const UserSection: React.FC = () => {
    const followers = [
    { id: "1", name: 'Alice Brown', username: '@alicebrown' },
    { id: "2", name: 'Chris Green', username: '@chrisgreen' },
    // Add more followers...
  ];
   const handlefollow = (username: string) => {
    // Handle unfollow logic here
    console.log(`Unfollowed: ${username}`);
  };
  const showProfile = (id: string) =>{
    console.log("show profile")
  }

  return (
    <div className="w-full ">
        <Heading level={2} className="text-lg font-semibold mb-4">Connect with People near you and beyond</Heading>
          <div className="w-full">
          {followers.length > 0 ? (
            followers.map((person) => (
              <PersonCard
                key={person.username}
                name={person.name}
                username={person.username}
               showfollow={true} 
               follow = {() => handlefollow(person.username)} 
               viewProfile={() => showProfile(person.id)}
               showProfile={true}
              />
            ))
          ) : (
            <Text className="text-primary2">You don't have any followers yet.</Text>
          )}
        </div>
    </div>

  )
}

export default UserSection