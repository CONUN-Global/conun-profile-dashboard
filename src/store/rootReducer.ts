import { combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import userAuthReducer from './user/userAuthSlice'

const tokenPersistConfig = {
  key: 'token',
  storage: storage,
  whitelist: ['token']
}

const rootReducer = combineReducers({
  userAuth: persistReducer(tokenPersistConfig, userAuthReducer)
})

export default rootReducer
