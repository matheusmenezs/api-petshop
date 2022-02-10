const Attendance = require('../models/attendance')

module.exports = (app) => {
    app.get('/atendimentos', (req, res) => {
        Attendance.List(res)
    })

    app.get('/atendimentos/:id', (req, res) => {
        const id = req.params.id
        Attendance.Search(id, res)
    })

    app.post('/atendimentos', (req, res) => {
        const attendance = req.body
        Attendance.Add(attendance, res)
    })

    app.patch('/atendimentos/:id', (req, res) => {
        const id = req.params.id
        const attendance = req.body
        Attendance.Update(id, attendance, res)
    })
    
    app.delete('/atendimentos/:id', (req, res) => {
        const id = req.params.id
        Attendance.deleteId(parseInt(id), res)
    })

    app.delete('/atendimentos', (req, res) => {
        const attendance = req.body
        Attendance.Delete(attendance, res)
    })
}