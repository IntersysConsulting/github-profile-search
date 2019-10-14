const { items_per_page } = require('../config')

const 
  githubUrl = `https://api.github.com`,
  githubAccessToken = '80c050d39dbe1ca2035357039bd96a4a9391da1c',
  fetchData = (typeSearch, query) => fetch(`${githubUrl}/${typeSearch}?${query}`, { method: 'GET', headers: { "Authorization": `token ${githubAccessToken}` } })

// const searchUsersWithAllInformation = async function(location, language, page = 1) {
//   const queryItems = []

//   if (language) {
//     queryItems.push(`language:${language}`)
//   }

//   if (location) {
//     queryItems.push(`location:${location}`)
//   }

//   const users = await fetchData(`search/users`, `q=${queryItems.join('+')}&page=${page}&per_page=${items_per_page}`)

//   const usersInformation = await users.json()

//   return {
//     ...usersInformation,
//     items: usersInformation.items.map(async value => {
//       const user = await fetchData(`users/${value.login}`)
//       const userInfo = await user.json()

//       return userInfo
//     })
//   }
// }

module.exports = {
  searchByUsername: name => fetchData(`search/users`, `q=${name}`),
  searchByUserByLanguage: (name, language) => fetchData(`search/users`, `q=${name}+language:${language}`),
  searchByUserByLocation: (name, location) => fetchData(`search/users`, `q=${name}+location:${location}`),
  searchByLanguageAndLocation: (language, location) => fetchData(`search/users`, `q=language:${language}+location:${location}`),
  getUserInformation: username => fetchData(`users/${username}`),
  searchByAll: (name, location, language, page = 1) => {

    const queryItems = []
    // if (name) {
    //   console.log(name)
    //   queryItems.push(name)
    // }

    if (language) {
      queryItems.push(`language:${language}`)
    }

    if (location) {
      queryItems.push(`location:${location}`)
    }

    return fetchData(`search/users`, `q=${queryItems.join('+')}&page=${page}&per_page=${items_per_page}`)
  } 
}
