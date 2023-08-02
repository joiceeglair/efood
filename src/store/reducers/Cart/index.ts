import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Menu from '../../../model/Menu/Menu'

type CartState = {
  items: Menu[]
  activeTheCart: boolean
}

const initialState: CartState = {
  items: [],
  activeTheCart: false
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Menu>) => {
      state.items.push(action.payload)
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    activeTheCart: (state) => {
      if (state.activeTheCart) {
        state.activeTheCart = false
      } else {
        state.activeTheCart = true
      }
    }
  }
})

export const { add, remove, activeTheCart } = cartSlice.actions

export default cartSlice.reducer
