import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    isNavbarOpen: boolean
    navbarEndpoint: string
    formLoading: boolean
    isFormSubmitted: boolean

}

const initialState: CounterState = {
    isNavbarOpen: false,
    navbarEndpoint: 'home',
    formLoading: false,
    isFormSubmitted: false

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
        },
        setFormLoading: (state, action: PayloadAction<boolean>) => {
            state.formLoading = action.payload

        },
        setFormSubmitted: (state, action: PayloadAction<boolean>) => {
            state.isFormSubmitted = action.payload
        }



    },
})

export const { setNavbar, setNavEndpoint, setFormLoading, setFormSubmitted } = counterSlice.actions

export default counterSlice.reducer