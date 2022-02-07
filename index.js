const customExpress = require('./config/customExpress')
const connection = require('./infra/connection')
const table = require('./infra/tables')

connection.connect(error => {
    if(error){
        console.log(error)
    }else{
        console.log('connection established')
        table.init(connection)

        const app = customExpress()
        app.listen(3000, console.log('Server running on port 3000'))
    }
})

