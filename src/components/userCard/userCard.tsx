import { TUser } from "./userType"

interface UserCardProps {
  user: TUser
  index: number
}

export default function UserCard({user, index} : UserCardProps) {
  return (
    <div className="userCard min-w-[305px] h-[265px] flex flex-col justify-center items-center my-5 border-solid border-gray border-2 rounded-xl" key={`user${index}`}>

        <img className="rounded-full" src={user.avatar}></img>
        <p>{`${user.first_name}  ${user.last_name}`}</p>
   
    </div>
  )
}