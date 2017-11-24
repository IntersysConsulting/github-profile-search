const 
  githubUrl = `https://api.github.com`
  searchRequest = (typeSearch, query) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.withCredentials = true

      xhr.addEventListener("readystatechange", () => {
        if (this.readyState === 4) {
          return resolve(this.responseText)
          console.log(this.responseText)
        } else {
          return reject(null)
        }
      })

      xhr.open("GET", `${githubUrl}/${typeSearch}?${query}`)
      xhr.send()
    })
}

module.exports = {
  searchByUsername: name => searchRequest(`search/users`, `q=${name}`),
  searchByUserByLanguage: (name, language) => searchRequest(`search/users`, `q=${name}+language:${language}`),
  searchByUserByLocation: (name, location) => searchRequest(`search/users`, `q=${name}+location:${location}`)
}