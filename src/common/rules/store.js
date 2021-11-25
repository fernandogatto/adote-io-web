import { createStore, applyMiddleware, compose } from 'redux';

import thunkMiddleware from 'redux-thunk';

import { createLogger } from 'redux-logger';

import reducers from "./reducers";

const DEBUG = process.env.NODE_ENV === 'development';

const loggerMiddleware = createLogger();

const middleware = [thunkMiddleware, DEBUG && loggerMiddleware].filter(Boolean);

const store = createStore(
    reducers,
    compose(applyMiddleware(...middleware)),
);

export default store;
