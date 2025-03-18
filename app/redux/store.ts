import { configureStore } from "@reduxjs/toolkit"
import candidateReducer from "./reducers/candidateSlice"
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import uiReducer from "./reducers/uiSlice"
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['candidate'],
}

const persistedReducer = persistReducer(persistConfig, candidateReducer)

export const store = configureStore({
    reducer: {
        candidateReducer: persistedReducer,
        uiReducer: uiReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
