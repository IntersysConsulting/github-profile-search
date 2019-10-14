const github = require('./github')

const cosas = github.searchUsersWithAllInformation('zapopan', 'javacript', 1)

console.log(cosas)
