import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: []
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        //adds information submitted vua todo form into the empty items array
        addTodo: (state, action) => {
            return { items: [...state.items, action.payload]}
        },
        //each item has been turned into a button and onclick: dispatch(removeOne(index)) is run, running the below sequence to remove the clicked item
        removeOne: (state, action) => {
            console.log(action)
            let array = [...state.items]
            let index = action.payload
            if(index !== -1) {
                array.splice(index, 1)
                return { items: array }
            }
        },
        //clears the entire items array
        clearTodo: () => {
            return { items: [] }
        }
    }
})

export const { addTodo, removeOne, clearTodo } = todoSlice.actions

export default todoSlice.reducer