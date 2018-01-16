import Rx from 'rxjs';
import { searchByAll } from '../../utils/github';


const inittialState = {
    results: [['Scale', 'Mexico','3','lordzero','<a href="https://github.com/lordzero0000"> lordzero0000 profile </a>','<a href="https://github.com/lordzero0000?tab=repositories">lordzero0000 repos</a>']]
}

// Actions
const
    GET_USER = 'github-profile-search/github/GET_USER',
    GET_USER_SUCCESS = 'github-profile-search/github/GET_USER_SUCCESS',
    GET_USER_ERROR = 'github-profile-search/github/GET_USER_ERROR'


// Reducer
export default function reducer(state = inittialState, action = {}) {
    return state
}

// Action Creators
export const getUser = (name, location, language) => ({
    type: GET_USER,
    name, location, language
})

export const getUserSuccess = (results) => ({
    type: GET_USER_SUCCESS,
    results
})

export const getUserError = (error) => ({
    type: GET_USER_ERROR,
    error
})

// Side effects
export const getUserEpic = action$ => 
    action$
        .ofType(GET_USER)
        .mergeMap( ({ name, location, language }) => 
            searchByAll(name, location, language)
                .then( getUserSuccess )
                .catch( getUserError )
        )
