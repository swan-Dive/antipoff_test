import { getAllUsers, getUserByID } from "../features/users/userActions";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { useEffect } from "react";
import UserCard from "../components/userCard/userCard";
import UsersHeader from "../components/common/usersHeader";

export default function UsersPage() {
  const cookies = new Cookies()
  const navigate = useNavigate()
  const usersData = useAppSelector((state) => state.users)
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (!cookies.get('token')) {
      navigate('/register')
      return
    }

    dispatch(getAllUsers())
    dispatch(getUserByID(1))
    console.log(usersData)
  }, [])
  return (
    <>
      <UsersHeader />
      <div className="grid grid-cols-3 gap-8">
        {usersData.data && usersData.data.data.map((item, index) => (
          <UserCard user={item} index={index}/>
        ))}
      </div>
    </>
  )
}