import { createSlice } from "@reduxjs/toolkit"
import Cookies from "universal-cookie"

const cookies = new Cookies()

const initialState = createInitialState()
const name =  'auth'

const authSlice = createSlice({name, initialState, reducers: {
  login: (state) => {
    if (cookies.get('token')) // Требуется проверка валидности токена на сервере
      state.authed = true
  },
  logout: (state) => {
    cookies.remove('token')
    state.authed = false
  }


}})

export const {login, logout} = authSlice.actions
export default authSlice.reducer

function createInitialState() {
  console.log(cookies.get('token'))
  return {authed: (cookies.get('token') ? true : false)}
}