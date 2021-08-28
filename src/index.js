const app = require('express')();
const port = 3000

app.get('/', (req, res) => {
    res.json({
        message: 'Hello there, my application is running.'
    })
})

app.listen(port, () => {
    console.log(`App is running on port: ${port}`)
})
