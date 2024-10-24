// import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer, PersistedState } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import rootReducer from './rootReducer';

// const APP_VERSION = 1.0;

// const persistConfig = {
//   key: 'root',
//   storage,
//   version: APP_VERSION, // Ensure version is a number
//   migrate: (state: PersistedState | undefined) => {
//     if (!state) {
//       // If there's no persisted state, return undefined to force a fresh start
//       return Promise.resolve(undefined);
//     }

//     const currentVersion = state._persist?.version;

//     if (currentVersion !== APP_VERSION) {
//       // If the versions don't match, clear persisted state to force a fresh start
//       storage.removeItem('persist:root');
//       return Promise.resolve(undefined);
//     }

//     // If versions match, return the existing state
//     return Promise.resolve(state as PersistedState);
//   }
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
// });

// const persistor = persistStore(store);

// export { store, persistor };
