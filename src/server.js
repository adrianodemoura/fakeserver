const app = require("./app")

const main = async () => {

    app.listen(process.env.APP_PORT, () => {
        console.log(`App ouvindo na porta: ${process.env.APP_PORT}`)
    })
}

main()
