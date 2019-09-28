const translate = require('translator-promise')

module.exports = (language = 'zh') => {
  process.on('uncaughtException', async (err) => {
    console.log(err)
    let result = await translate(err.message, language)
    let encodeErr = encodeURI(err)
    console.log(`\n\x1b[41;30m ERROR \x1b[0m \x1b[31;m${result.text} \x1b[31;m( ${err} )`)
    console.log(`\n\x1b[47;44m Baidu \x1b[0m \x1b[34mhttps://www.baidu.com/s?wd=${encodeErr}\x1b[0m`)
    console.log(`\x1b[34;47m G\x1b[31;mo\x1b[33;mo\x1b[34;mg\x1b[36;ml\x1b[31;me \x1b[0m \x1b[37;mhttps://www.google.com/search?q=${encodeErr}`)
    console.log(`\x1b[37;45m stackoverflow \x1b[0m \x1b[35;mhttps://stackoverflow.com/search?q=${encodeErr}\x1b[0m`)
  })
}