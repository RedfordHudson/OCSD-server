// express
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
app.listen(port, () => {console.log('Listening on port!')})

// CORS
const cors = require('cors');
app.use(cors({origin:'*'}))

app.get('/',(req,res) => {
    res.send({data:'WORKING'})
})