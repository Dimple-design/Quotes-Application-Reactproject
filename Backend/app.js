const express = require('express');
const app = express();
const mongoose = require('mongoose');
const seedDB = require('./seed');
const cors = require('cors');
const quotesRoute = require('./apis/quoteRoutes');


app.use(cors({origin:['https://localhost:5173']}));

mongoose.connect('mongodb://127.0.0.1:27017/quotesApp')
.then(()=>{console.log('DB CONNECTED')})
.catch((err)=>{console.log('DB CONNECTED', err)})

app.get('/hello', (req,res)=>{
    res.status(200). json({msg:"hello page"})
})


// seedDB()
app.use(quotesRoute);

app.listen(8080, ()=>{
    console.log('server connected at port:8080')

}
)

