import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import homeReducer from './reducers/home';
import { watchHome } from './sagas';

const rootReducer = combineReducers({
  home: homeReducer,
});

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchHome);

export default store;
