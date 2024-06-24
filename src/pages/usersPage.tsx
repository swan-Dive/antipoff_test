import { getAllUsers, getUserByID } from "../features/users/userActions";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { useEffect } from "react";

export default function UsersPage() {
  const usersData = useAppSelector((state) => state.users)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getAllUsers())
    dispatch(getUserByID(1))
  }, [])
  console.log(usersData)
  return (
    <>
      
    </>
  )
}