import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Определяем тип части состояния(среза/slice)
interface IMoneyState {
  value: number
}

// Определение начального состояния, используя тип
const initialState: IMoneyState = {
  value: 0,
}
export const moneySlice = createSlice({
  name: 'money',
  initialState,
  reducers: {
    setMoneyValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    },
  },
})

// Функция действия генерируется на каждую функцию релюсера(reducer), определённую в createSlice
export const { setMoneyValue } = moneySlice.actions

export default moneySlice.reducer