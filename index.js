const translate = require('translator-promise')

module.exports = (language = 'zh') => {
  process.on('uncaughtException', async (err) => {
    console.log(err)
    const result = await translate(err.message, language)
    console.log(`\n\x1b[41;30m ERROR \x1b[0m \x1b[31m${result.text} \x1b[34m( ${err} )`)
  })
}