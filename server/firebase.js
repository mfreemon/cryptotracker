const firebase = require('firebase')
// The configuration for initializing the application will be provided!
module.exports = firebase.initializeApp({
  databaseURL: 'USE THE PROVIDED FIREBASE DATABASE URL'
})
