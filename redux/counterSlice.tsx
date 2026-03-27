import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    isNavbarOpen: boolean
    navbarEndpoint: string

}

const initialState: CounterState = {
    isNavbarOpen: false,
    navbarEndpoint: 'home'

}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setNavbar: (state) => {
            state.isNavbarOpen = !state.isNavbarOpen
        },
        setNavEndpoint: (state, action: PayloadAction<string>) => {
            state.navbarEndpoint = action.payload
        }



    },
})

export const { setNavbar, setNavEndpoint } = counterSlice.actions

export default counterSlice.reducer