import { useState } from "react"
import { TButtonInput, TInput } from "../../common/commonTypes"
import { useNavigate } from "react-router-dom"
import Cookies from "universal-cookie"
import axios from "axios"
import { z } from "zod"
import { useAppDispatch } from "../../hooks/storeHooks"
import { login } from "../../features/users/authSlice"

const initialErrorState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: ""
}

type errorType = {
  name: string,
  email: string,
  password: string,
  confirmPassword: string
}

export default function RegistrationForm() {
  const dispatch = useAppDispatch()
  const [formData, setFormData] = useState({name: "", email: "", password: "", confirmPassword: ""})
  const [error, setError] = useState( {...initialErrorState })
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
    setError({...initialErrorState})
  } 

  const submitForm = async(e: TButtonInput) => {
    {console.log(error)}
    e.preventDefault()
    setError({...initialErrorState })
    let errorCopy = {...initialErrorState}
    {console.log(error)}
    checkFormNotEmpty(errorCopy)
    {console.log(error)}
    checkEmailValide(errorCopy)
    {console.log(error)}
    checkPasswordValid(errorCopy)
    setError(errorCopy)

    await axios.post(`${process.env.REACT_APP_API_URL}api/register`, {email: formData.email, password: formData.password})
    .then(res => {
      if (res.status === 200) {
        cookies.set('token', res.data.token)
        dispatch(login())
        navigate('/')
      }
    })
    .catch(err => {
      console.log(err)
      alert('Ошибка!')
    })
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[500px] h-content bg-white flex flex-col rounded-[16px]">
        
        <div className="flex flex-col p-[15px] space-y-[16px] shadow-2xl rounded-xl">
          
          <h2>Регистрация</h2>
          <label>Имя</label>
          <input onChange={handleFormChange} className={`inputStyle ${isEmptyField(error.name)}`} placeholder="Артур" type="text" name="name"/>
          <label>Email</label>
          <input onChange={handleFormChange} className={`inputStyle ${error.email && 'inputError'} ${isEmptyField(error.email)}`} placeholder="example@mail.com" type="email" name="email" />
          <label>Пароль</label>
          <input onChange={handleFormChange} className={`inputStyle ${isEmptyField(error.password)}`} placeholder="****" type="password" name="password"/>
          <label>Подтвердите пароль</label>
          <input onChange={handleFormChange} className={`inputStyle ${error.password && 'inputError'} ${isEmptyField(error.confirmPassword)}`} placeholder="****" type="password" name="confirmPassword"/>
          <button onClick={submitForm} className="buttonStyle" >Зарегистрироваться</button>
        </div>
      </div>
    </div>
  )

  function checkEmailValide(errorCopy: errorType) {
    const parseData = userSchema.safeParse(formData)
    if (!parseData.success) {
   
      errorCopy.email = parseData.error.message
    }
  }

  function checkPasswordValid(errorCopy: errorType) {
    if (formData.password !== formData.confirmPassword) {

      errorCopy.password = 'Пароли не совпадают!'
    }
  }

  function checkFormNotEmpty(errorCopy: errorType) {
    
    if (formData.name === "") 
      errorCopy.name = "empty"
    if (formData.password === "") 
      errorCopy.password = "empty"
    if (formData.email === "") 
      errorCopy.email = "empty"
    if (formData.confirmPassword === "") 
      errorCopy.confirmPassword = "empty"
    setError(errorCopy)
  }

  function isEmptyField(field: string) {
    console.log(field)
    return field === 'empty' ? 'emptyField' : ''
  }
}

export type TRegisterUser = {
  name: string,
  email: string,
  password: string,
  confirmPassword: string
}

