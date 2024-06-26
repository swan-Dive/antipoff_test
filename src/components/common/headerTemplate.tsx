import Cookies from "universal-cookie"
import { useAppDispatch } from "../../hooks/storeHooks"
import { logout } from "../../features/users/authSlice"
import { useNavigate } from "react-router-dom";

export default function Header({children} : Readonly<{children: React.ReactNode;}>) {
  const cookies = new Cookies()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  return (
    <div className="headerStyle">
      
      {cookies.get('token') && 
      <button
        onClick={() => dispatch(logout())}
        className="logOutButton text-white absolute right-5 top-4 border-solid border-white border-2 p-1.5 rounded-xl">
        Выход
      </button>}
      {window.location.pathname.includes('users') && 
        <button
        onClick={() => navigate('/')}
        className="logOutButton text-white absolute left-5 top-4 border-solid border-white border-2 p-1.5 rounded-xl">
        Назад
        </button>
      }

      {children}
    </div>
  )
}