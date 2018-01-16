import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux'
import github, { getUserEpic } from './github'

export const rootEpic = combineEpics(
    getUserEpic
);

export const rootReducer = combineReducers({
    github
});