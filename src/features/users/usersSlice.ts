import { PayloadAction, createSlice} from "@reduxjs/toolkit"
import { getAllUsers, getUserByID } from "./userActions"

const name = 'users'
const initialState = createInitialState()

const usersSlice = createSlice({name, initialState, reducers: {

  },
  extraReducers: (builder) => {

    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.data = action.payload
      state.error = ""
      state.loading = false
    })
    builder.addCase(getAllUsers.rejected, (state, action) => {
      state.error = action.error.message ? action.error.message : "" 
      state.loading = false
    })
    builder.addCase(getAllUsers.pending, (state) => {
      state.loading = true
      state.error = ""
    })


    builder.addCase(getUserByID.fulfilled, (state, action) => {
      state.current = action.payload
      state.loading = false
      state.error = ""
    })
    builder.addCase(getUserByID.rejected, (state, action) => {
      state.error = action.error.message ? action.error.message : "" 
      state.loading = false
    })
    builder.addCase(getUserByID.pending, (state) => {
      state.loading = true
      state.error = ""
    })
  }
})


function createInitialState() {
  return {
    data: {data: [{avatar: "", email: "", first_name: "", id: 1, last_name: ""}], page: 1, per_page: 0, total: 0, total_pages: 0},
    current: {data: {avatar: "", email: "", first_name: "", id: 1, last_name: ""}},
    error: "",
    loading: false
  }
}

export default usersSlice.reducer