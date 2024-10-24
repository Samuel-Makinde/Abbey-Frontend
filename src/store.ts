import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, PersistedState } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer';

const APP_VERSION = 1.0;

const persistConfig = {
  key: 'root',
  storage,
  version: APP_VERSION,
  migrate: (state: PersistedState | undefined) => {
    if (!state) {
      return Promise.resolve(undefined);
    }

    const currentVersion = state._persist?.version;

    if (currentVersion !== APP_VERSION) {
      storage.removeItem('persist:root');
      return Promise.resolve(undefined);
    }

    return Promise.resolve(state);
  }
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const persistor = persistStore(store);

export { store, persistor };
