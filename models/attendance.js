const connection = require('../infra/connection')

class Attendance{
    List(res){
        const sql = 'SELECT * FROM Attendance'

        connection.query(sql, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultados)
            }
        })
    }

    Search(id, res){
        const sql = 'SELECT * FROM Attendance WHERE id = ?'

        connection.query(sql, id, res, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(201).json(resultados)
            }
        })
    }

    Add(data, res){
        const sql = 'INSERT INTO Attendance SET ?'

        connection.query(sql, data, erro => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(201).json(data)
            }
        })
    }

}

module.exports = new Attendance