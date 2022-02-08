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
        const data = req.body
        Attendance.Add(data, res)
    })
}