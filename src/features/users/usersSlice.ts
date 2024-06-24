import { createSlice} from "@reduxjs/toolkit"
import { TUser } from "../../components/userCard/userType"
import { getAllUsers, getUserByID } from "./userActions"

const name = 'users'
const initialState = createInitialState()

const usersSlice = createSlice({name, initialState, reducers: {

  },
  extraReducers: (builder) => {

    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.data = action.payload
      state.loading = false
    })
    builder.addCase(getAllUsers.rejected, (state, action) => {
      state.error = action.error.message ? action.error.message : "" 
      state.loading = false
    })
    builder.addCase(getAllUsers.pending, (state) => {
      state.loading = true
    })


    builder.addCase(getUserByID.fulfilled, (state, action) => {
      state.current = action.payload
      state.loading = false
    })
    builder.addCase(getUserByID.rejected, (state, action) => {
      state.error = action.error.message ? action.error.message : "" 
      state.loading = false
    })
    builder.addCase(getUserByID.pending, (state) => {
      state.loading = true
    })
  }
})


function createInitialState() {
  return {
    data: null,
    current: null,
    error: "",
    loading: false
  }
}

export default usersSlice.reducer