import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"




export const getAllUsers = createAsyncThunk(
  `user/GetAllUsers`,
  async() => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}api/users`)
    return response.data
  }
)

export const getUserByID = createAsyncThunk(
  `user/getUserByID`, 
  async(id: number) => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}api/users/${id}`)
    return response.data
  }
)