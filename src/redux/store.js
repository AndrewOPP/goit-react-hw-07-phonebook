import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { authReducer } from './auth/slice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filterReducer,
  auth: authReducer,
});
// const persistRootReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
});

// export const persistor = persistStore(store);
