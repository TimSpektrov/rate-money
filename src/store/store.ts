import { configureStore } from '@reduxjs/toolkit'
import moneyReducer from './moneySlice'

export const store = configureStore({
  reducer: {
    money: moneyReducer
  },
})

// Выведение типов `RootState` и `AppDispatch` из хранилища
export type RootState = ReturnType<typeof store.getState>
// Выведенные типы: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch