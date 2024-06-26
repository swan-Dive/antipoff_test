import mailSVG from "../../assets/images/common/mail.svg"
import phoneSVG from "../../assets/images/common/phone.svg"

interface CurrentUserBodyProps {
  description:string
  email: string
  phone: string
}

export default function CurrentUserBody({description, email, phone}: CurrentUserBodyProps) {
  return (
    <div className="w-9/10 m-auto flex max-sm:flex-col-reverse">
      <div className="w-2/5 ml-[20%] pt-[40px] max-sm:w-full max-sm:pl-[10px] max-sm:m-0">
        <p className="whitespace-pre-wrap ">{description}</p>
      </div>
      <div className="w-1/5 ml-[10%] pt-[40px] float-left space-y-5 max-sm:w-full max-sm:m-auto max-sm:flex max-sm:flex-col max-sm:pl-[10px]">
        <p className="flex items-center"><img className="pr-[10px]" src={mailSVG} alt="почта"/>{email}</p>
        <p className="flex items-center"><img className="pr-[10px]" src={phoneSVG} alt="телефон"/>{phone}</p>
      </div>
    </div>
  )
}