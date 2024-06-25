import { useState } from "react"
import { TButtonInput, TInput } from "../../common/commonTypes"
import { useNavigate } from "react-router-dom"
import Cookies from "universal-cookie"
import axios from "axios"
import { z } from "zod"

export default function RegistrationForm() {
  const [formData, setFormData] = useState({name: "", email: "", password: "", confirmPassword: ""})
  const [error, setError] = useState("")
  const userSchema = z.object({
    name: z.coerce.string(),
    email: z.string().email(),
    password: z.coerce.string(),
    confirmPassword: z.coerce.string()
  })
  const navigate = useNavigate()

  const cookies = new Cookies()
  const handleFormChange = (e: TInput) => {
    const {name, value} = e.target
    
    setFormData({...formData, [name] : value})
    
  } 

  const submitForm = async(e: TButtonInput) => {
    e.preventDefault()
    setError("")
    const parseData = userSchema.safeParse(formData)
    if (!parseData.success) {
      setError(parseData.error.message)
      return
    }

    await axios.post(`${process.env.REACT_APP_API_URL}api/register`, {email: formData.email, password: formData.password})
    .then(res => {
      if (res.status === 200) {
        cookies.set('token', res.data.token)
        navigate('/')
      }
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <div className="w-[500px] h-content bg-white flex flex-col rounded-[16px]">
        
        <div className="flex flex-col p-[15px] space-y-[16px]">
          <h2>Регистрация</h2>
          <label>Имя</label>
          <input onChange={handleFormChange} className="inputStyle" placeholder="Артур" type="text" name="name"/>
          <label>Email</label>
          <input onChange={handleFormChange} className="inputStyle" placeholder="example@mail.com" type="email" name="email" />
          <label>Пароль</label>
          <input onChange={handleFormChange} className="inputStyle" placeholder="****" type="password" name="password"/>
          <label>Подтвердите пароль</label>
          <input onChange={handleFormChange} className="inputStyle" placeholder="****" type="password" name="confirmPassword"/>
          <button onClick={submitForm} className="buttonStyle" >Зарегистрироваться</button>
          <p>{error && error}</p>
        </div>
      </div>
    </div>
  )
}

export type TRegisterUser = {
  name: string,
  email: string,
  password: string,
  confirmPassword: string
}