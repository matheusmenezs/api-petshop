module.exports = (app) => {
    app.get('/atendimentos', (req, res) => {
        res.send('executing method GET')
    })
    app.post('/atendimentos', (req, res) => {
        res.send('executing method POST')
    })
}