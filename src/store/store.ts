import { configureStore } from "@reduxjs/toolkit";
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
import mainReducer from "../reducers/mainReducer";
import {PersistConfig} from "redux-persist/es/types";




const persistConfig: PersistConfig<any> = {
    key: 'root',
    storage,
    // whitelist: ['products'],
};

const persistedReducer = persistReducer(persistConfig, mainReducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});


export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

