import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartReduxSlice';
import userReducer from './userSlice';
import registerReducer from './registerSlice';
import commentReducer from './commentSlice';
import payReducer from './paySlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};
const rootReducer =combineReducers({
  user: userReducer,
    cart: cartReducer,
    register:registerReducer,
    comments:commentReducer,
    pay:payReducer
})
const persistedReducers = persistReducer(persistConfig,rootReducer);
export const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export const persistor = persistStore(store);


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;