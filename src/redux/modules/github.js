import Rx from 'rxjs';


// Actions
const
    GET_USER = 'github-profile-search/github/GET_USER'


// Reducer
export default function reducer(state = {}, action = {}) {
    return state
}

// Action Creators
export const getUser = () => ({
    type: GET_USER
})

// Side effects
export const getUserEpic = action$ => 
    action$
        .ofType(GET_USER)
        .do( () => console.log('Action triggered!') )
        .ignoreElements()
