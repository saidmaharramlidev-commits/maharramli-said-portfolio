import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    isNavbarOpen: boolean
}

const initialState: CounterState = {
    isNavbarOpen: false
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setNavbar: (state) => {
            state.isNavbarOpen = !state.isNavbarOpen
        }


    },
})

export const { setNavbar } = counterSlice.actions

export default counterSlice.reducer