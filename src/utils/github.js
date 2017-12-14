const 
  githubUrl = `https://api.github.com`,
  fetchData = (typeSearch, query) => fetch(`${githubUrl}/${typeSearch}?${query}`, { method: 'GET', headers: { "Authorization": "token 7515253eb4e8956f5e6ec183ed8d3ccb80ce7726"} })

module.exports = {
  searchByUsername: name => fetchData(`search/users`, `q=${name}`),
  searchByUserByLanguage: (name, language) => fetchData(`search/users`, `q=${name}+language:${language}`),
  searchByUserByLocation: (name, location) => fetchData(`search/users`, `q=${name}+location:${location}`),
  searchByLanguageAndLocation: (language, location) => fetchData(`search/users`, `q=language:${language}+location:${location}`)
}