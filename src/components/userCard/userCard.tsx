import { Fragment } from "react/jsx-runtime"
import { TUser } from "./userType"
import { Link } from "react-router-dom"

interface UserCardProps {
  user: TUser
}

export default function UserCard({user} : UserCardProps) {

  return (
    <Fragment>
      <Link to={`/users/${user.id}`}>
        <div className="userCard min-w-[305px]
        w-[305px] h-[265px] flex flex-col justify-center
        items-center my-5 border-solid border-gray border-2 rounded-xl
        lg:hover:scale-[1.05] ease-in-out duration-300"
        >

            <img className="rounded-full" src={user.avatar}></img>
            <p>{`${user.first_name}  ${user.last_name}`}</p>
      
        </div>
      </Link>
    </Fragment>
  )
}

