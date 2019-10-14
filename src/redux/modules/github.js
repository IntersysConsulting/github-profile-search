import { range, of, from, Observable } from 'rxjs'
import { searchByAll, getUserInformation, searchUsersWithAllInformation } from '../../utils/github'
import { ofType } from 'redux-observable'
import { map, filter, scan, mergeMap, catchError } from 'rxjs/operators'



const inittialState = {
    search: { name: null, location: null, language: null , total_count: 0 },
    page: 1,
    results: [['Seto Kaiba', 'Mexico','tronco@wikipedia.org','lordzero','<a href="https://github.com/lordzero0000"> lordzero0000 profile </a>','<a href="https://github.com/lordzero0000?tab=repositories">lordzero0000 repos</a>']]
}

// Actions
const
    GET_USER = 'github-profile-search/github/GET_USER',
    GET_USER_SUCCESS = 'github-profile-search/github/GET_USER_SUCCESS',
    GET_USER_ERROR = 'github-profile-search/github/GET_USER_ERROR',
    GET_USER_INFO = 'github-profile-search/parse/GET_USER_INFO',
    GET_USER_INFO_SUCCESS = 'github-profile-search/github/GET_USER_INFO_SUCCESS',
    GET_USER_INFO_ERROR = 'github-profile-search/github/GET_USER_INFO_ERROR',
    UPDATE_CURRENT_PAGE = 'github-profile-search/page/UPDATE_CURRENT_PAGE',
    UPDATE_SEARCH_VALUES = 'github-profile-search/page/UPDATE_SEARCH_VALUES',
    CLEAN_STORE = 'github-profile-search/page/CLEAN_STORE'


// Reducer
export default function reducer(state = inittialState, action = {}) {
    switch (action.type) {

        case GET_USER_SUCCESS: {
            const prevResults = state.results
            const currentSearch = state.search
            if (action.results && action.results.items) {
                return { ...state, results: [
                    ...prevResults, ...action.results.items.map(i => {
                        return [
                            '',
                            '',
                            '',
                            i.login,
                            `<a href="${i.html_url}">${i.login}'s Profile</a>`,
                            `<a href="${i.repos_url}">${i.login}'s Repos</a>`
                        ]
                    })
                ], search: {
                    ...currentSearch,
                    total_count: action.results.total_count }
                }
            }

            return state
        }
        case GET_USER_INFO_SUCCESS: {
            const prevResults = state.results
            
            if (action.result && !action.result.message) {
                return { ...state, results: [
                    ...prevResults, [
                        action.result.name,
                        action.result.location,
                        action.result.email,
                        action.result.login,
                        `<a href="${action.result.html_url}">${action.result.login}'s Profile</a>`,
                        `<a href="${action.result.repos_url}">${action.result.login}'s Repos</a>`
                    ]
                ]}
            }
        }
        case CLEAN_STORE: {
            return { ...state, results: [], page: 1 }
        }
        case UPDATE_CURRENT_PAGE: {
            return { ...state, page: action.page + 1 }
        }
        case UPDATE_SEARCH_VALUES: {
            return {
                ...state,
                search: {
                    name: action.name,
                    location: action.location,
                    language: action.language,
                    total_count: action.total_count
                }
            }
        }

        default: return state
    }
}

// Action Creators
export const getUser = (name, location, language, page) => ({
    type: GET_USER,
    name, location, language, page
})

export const getUserSuccess = results => ({
    type: GET_USER_SUCCESS,
    results
})

export const getUserError = error => ({
    type: GET_USER_ERROR,
    error
})

export const getUserInfo = username => ({
    type: GET_USER_INFO,
    username
})

export const getUserInfoSuccess = result => ({
    type: GET_USER_INFO_SUCCESS,
    result
})

export const getUserInfoError = error => ({
    type: GET_USER_INFO_ERROR,
    error
})

export const updateCurrentPage = page => ({
    type: UPDATE_CURRENT_PAGE,
    page
})

export const updateSearchValues = (name, location, language, total_count) => ({
    type: UPDATE_SEARCH_VALUES,
    name, location, language, total_count
})

export const clearStore = () => ({
    type: CLEAN_STORE
})

// Side effects
// export const getUserEpic = action$ => 
//     action$
//         .ofType(GET_USER)
//         .mergeMap(({ name, location, language, page }) => from(
//             searchByAll(name, location, language, page))
//         ).map(res => res.json())
//         .then( getUserSuccess )

// export const getUserInfoEpic = action$ => 
//     action$
//         .ofType(GET_USER_INFO)
//         .mergeMap( ({ username }) => 
//             getUserInfo(username)
//                 .then( res => res.json() )
//                 .then( getUserInfoSuccess )
//                 .catch( getUserInfoError )
//         )

// export const getUserEpic = action$ => action$.pipe(
//     ofType(GET_USER),
//     mergeMap(({ name, location, language, page }) =>
//         searchUsersWithAllInformation(name, location, language, page)
//             .then( res => {
//                 console.log(res)
//             } )
//             //.then(getUserSuccess)
//     )
// )

export const getUserEpic = action$ => action$.pipe(
    ofType(GET_USER),
    mergeMap(({ name, location, language, page }) =>
        searchByAll(name, location, language, page)
            .then(res => res.json())
            .then(getUserSuccess)
    )
)

// export const getUserEpic = action$ => action$.pipe(
//     ofType(GET_USER),
//     mergeMap(({ name, location, language, page }) =>
//         from(searchByAll(name, location, language, page))
//         .mergeMap(data => Observable.of(
//             getUserSuccess(data.json()),
//             getUserInfo(data.json())
//         ))
//     )
// )

// export const getUserInfoEpic = action$ => action$.pipe(
//     ofType(GET_USER_INFO),
//     mergeMap(({ username }) => {
//         const users = username.items

//         return users.map(async value => {
//             const user = await getUserInformation(value.username)
//             console.log(user.json())
//             return getUserInfoSuccess(user.json())
//         })
//     })
// )
