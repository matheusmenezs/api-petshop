const connection = require('../infra/connection')
const moment = require('moment')
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

    Add(attendance, res){

        attendance.date = moment(attendance.date, 'DD/MM/YYYY').format('YYYY-MM-DD')
        
        const message = 'Date is invalid'

        if (moment (attendance.creation_date ).isAfter(attendance.date)){
            res.status(400).json(message)
        }else{
            const sql = 'INSERT INTO Attendance SET ?'

            connection.query(sql, attendance, erro => {
                if(erro){
                    res.status(400).json(erro)
                }else{
                    res.status(201).json(attendance)
                }
            })
        }
        

    }

}

module.exports = new Attendance