import { combineReducers } from 'redux';

import { appSettingsReducer } from './appSettings';

const reducers = combineReducers({
    app: appSettingsReducer,
});

export default reducers;