import { createSlice } from '@reduxjs/toolkit';
import { clothes } from '../../containers/state/clothes';

const initialState = {
  yes: false,
  clothes,
}

export const counterSlice = createSlice({
  name: 'clothes',
  initialState,
  reducers: {
    pusto: (state) => {
      state.yes = !state.yes
      if (state.yes) {state.clothes = []}
      if (!state.yes) {state.clothes = clothes}
      console.log(state.clothes)
    }
    // increment: (state) => {
    //   state.count += 1
    // },
    // decrement: (state) => {
    //   state.count -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.count += action.payload
    // },
    // test: (state) => {
    //   state.count = state.count+13
    // }
  },
})
export const { pusto } = counterSlice.actions

export default counterSlice.reducer