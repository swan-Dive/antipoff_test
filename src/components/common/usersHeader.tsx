import Header from "./headerTemplate"

export default function UsersHeader({children} : Readonly<{children: React.ReactNode;}>) {

  return (
    <>
      <Header>
        <div className="w-3/5 h-full m-auto pt-5 flex flex-col justify-center ">
          <h1 className="text-white">Наша команда</h1>
          <h2 className="text-white"> Это опытные специалисты, хорошо разбирающиеся во всех задачах,
          которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций. </h2>
        </div>
      </Header>
      {children}
    </>
  )
}
