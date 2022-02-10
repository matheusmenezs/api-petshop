const connection = require('../infra/connection')
const moment = require('moment')
class Attendance{
    List(res){
        const sql = 'SELECT * FROM Attendance'

        connection.query(sql, (error, results) => {
            if(error){
                res.status(400).json(error)
            }else{
                res.status(200).json(results)
            }
        })
    }

    Search(id, res){
        const sql = 'SELECT * FROM Attendance WHERE id = ?'

        connection.query(sql, id, (error, results) => {
            if(error){
                res.status(400).json(error)
            }else{
                res.status(201).json(results)
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

            connection.query(sql, attendance, error => {
                if(error){
                    res.status(400).json(error)
                }else{
                    res.status(201).json(attendance)
                }
            })
        }
        
    }

    Update(id, attendance, res){

        attendance.date = moment(attendance.date, 'DD/MM/YYYY').format('YYYY-MM-DD')
        const message = 'Date is invalid'

        if (moment (attendance.creation_date).isAfter(attendance.date)){
            res.status(400).json(message)
        }else{
            const sql  = 'UPDATE Attendance SET ? WHERE id = ?'

            connection.query(sql, [attendance, id], (error, results) => {
                if(error){
                    res.status(400).json(error)
                }else{
                    res.status(200).json(attendance)
                }
            })
        }
    }

    deleteId(id, res){
        const sql = 'DELETE FROM Attendance WHERE id = ?'

        connection.query(sql, id, (erro, results) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(results)
            }
        })

    }

    Delete(attendance, res){
        const id = attendance.id
        
        const sql = 'DELETE FROM Attendance WHERE id = ?'

        connection.query(sql, id, (erro, results) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(400).json(results)
            }
        })

        
    }

}

module.exports = new Attendance