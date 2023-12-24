'use script'

const fs = require( 'fs' ).promises
const crypto = require( 'crypto' )
require( "dotenv-flow" ).config()

global.setLog = async function ( texto, fileName = 'debug' ) {
    const dataDia = new Date().toISOString().substring(0,10)
    const dataHora = new Date().toTimeString().substring(0,8)
    const nameLog = fileName.length ? '_' + fileName.replace(/\s/g, '_') : ''

    if (typeof texto === 'object' ) { texto = JSON.stringify( texto ) }

    const fileLog = `./storage/logs/${dataDia}${nameLog}.log`

    fs.appendFile( fileLog, dataDia+ ' ' + dataHora + ' ' + texto + "\n", (error) => {
      if (error) { console.log(error)  }
    } )
}

global.getFile = async function( path ) {
  const file = './src/' + path.replace( '.json', '' ).replace( 'src/', '') + '.json'

  const response = await fs.readFile( file, 'utf8', ( error, containt ) => {

    if ( error ) { return { error: `Erro ao tentar ler ${file}` } }

    return  containt
  } )

  return response
}

global.encryptPassword = function( password ) {
  const cipher = crypto.createCipher('aes-256-cbc', process.env.APP_SECRET)
  let encrypted = cipher.update(password, 'utf-8', 'hex')
  encrypted += cipher.final('hex')

  return encrypted
}

global.decryptPassword = function( encryptedPassword ) {
  const decipher = crypto.createDecipher( 'aes-256-cbc', process.env.APP_SECRET )
  let decrypted = decipher.update( encryptedPassword, 'hex', 'utf-8')
  decrypted += decipher.final('utf-8')

  return decrypted
}

global.dump = ( txt ) => {
  if ( process.env.DEBUG === '0' ) { return }

  console.log( txt ) 
}

global.dd = ( txt ) => {
  if ( process.env.DEBUG === '0' ) { return }

  console.log( txt )
  throw new Error( "Fluxo cancelado" )
}

String.prototype.toCamelCase = function () {
  const words = this.split('-')
  const firstWord = words[0]
  const camelCasedWords = words.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1))

  return firstWord + camelCasedWords.join('')
}