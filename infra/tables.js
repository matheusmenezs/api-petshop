class Tables{
    init(connection){
        this.connection = connection

        this.createTable()
    }
    createTable(){
        const sql = 'CREATE TABLE IF NOT EXISTS Attendance(id int NOT NULL AUTO_INCREMENT, client varchar(50) NOT NULL, pet varchar(30) NOT NULL, status varchar(20) NOT NULL, comments text, date datetime NOT NULL, creation_date TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY(id))'

        this.connection.query(sql, erro => {
            if(erro){
                console.log(erro)
            }else{
                console.log('Table created successfully')
            }
        })
    }
}

module.exports = new Tables