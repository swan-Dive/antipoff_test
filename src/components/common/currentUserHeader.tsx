import Header from "./headerTemplate"

interface CurrentUserHeaderProps {
  name: string
  avatar: string

}

export default function CurrentUserHeader({name, avatar} : CurrentUserHeaderProps) {

  return (
    <Header>
      <div className="w-9/10 m-auto flex h-full">
      <div className="ml-[20%] flex items-center h-full max-sm:flex-col-reverse max-sm:m-auto">
        <img className="rounded-full" src={avatar} alt="аватар"/>
        <div className="text-white pl-[40px] max-sm:pl-0">
          <h1 >{name}</h1>
          <h2 className="text-left text-[32px] max-sm:text-center">Партнер</h2>
        </div>
      </div>

      </div>

    </Header>
  )
} 