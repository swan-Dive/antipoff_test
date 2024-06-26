import { getAllUsers, getUserByID } from "../features/users/userActions";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { useEffect } from "react";
import UserCard from "../components/userCard/userCard";

export default function UsersPage() {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const usersData = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getAllUsers());
    dispatch(getUserByID(1));
  }, []);
  return (
    <>
      <div className="grid grid-cols-3 gap-8 w-4/5 m-auto justify-items-center 2xl:w-3/5 max-xl:w-3/5 max-xl:grid-cols-2 max-sm:grid-cols-1">
        {usersData.data &&
          usersData.data.data.map((item, index) => (
            <UserCard user={item} key={`userCard${index}`} />
          ))}
      </div>
    </>
  );
}
