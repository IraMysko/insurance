import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware()
    )

);

export type RootState = ReturnType<typeof rootReducer>