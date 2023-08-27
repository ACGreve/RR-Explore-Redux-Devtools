import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        //adds 1 to value var
        increment: (state) => {
            return { value: state.value + 1 }
        },
        //removes one from value var
        decrement: (state) => {
            return { value: state.value - 1 }
        },
        //takes number submitted from form in Counter.js and adds to total count
        incrementByAmount: (state, action) => {
            return { value: state.value + action.payload }
        }
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer