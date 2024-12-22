import { configureStore } from '@reduxjs/toolkit';
import { createStore } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import formReducers from './slice'


const persistConfig= {
    key:'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig,formReducers);
const store=configureStore({
    reducer:persistedReducer
})

export const persistor=persistStore(store);
export default store;