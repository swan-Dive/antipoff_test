import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { getUserByID } from "../features/users/userActions";
import CurrentUserHeader from "../components/common/currentUserHeader";
import CurrentUserBody from "../components/common/currentUserBody";
import {
  placeholderDescription,
  placeholderEmail,
  placeholderPhone,
} from "../debug/currentUserPlaceholders";

export default function CurrentUser() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.users.current.data);
  const error = useAppSelector((state) => state.users.error);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      const parseID = parseInt(id);
      dispatch(getUserByID(parseID));
    }
  }, []);

  useEffect(() => {
    if (error) {
      alert("Пользователя не существует!");
      navigate("/");
    }
  }, [error]);

  return (
    <div>
      <CurrentUserHeader
        name={user && `${user.first_name} ${user.last_name}`}
        avatar={user && user.avatar}
      />
      <CurrentUserBody
        description={placeholderDescription}
        email={placeholderEmail}
        phone={placeholderPhone}
      />
    </div>
  );
}
