import Cookies from "universal-cookie"

export default function UsersHeader() {
  const cookie = new Cookies()
  return (
    <div className="headerStyle">
            {cookie.get('token') && <button className="logOutButton text-white absolute right-5 top-5 border-solid border-white border-2 p-1.5 rounded-xl">Выход</button>}
      <div className="w-3/5 m-auto pt-5">
        <h1 className="text-white">Наша команда</h1>
        <h2 className="text-white"> Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций. </h2>
      </div>
    </div>
  )
}