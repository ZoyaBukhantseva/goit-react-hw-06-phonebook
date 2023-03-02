import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import contactsReduser from "./contactSlise";
import filterReducer from "./filterSlise";

const rootReducer = combineReducers({
    contacts: contactsReduser,
    filter: filterReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['contacts']
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer;
