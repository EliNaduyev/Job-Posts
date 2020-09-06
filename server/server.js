const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const bodyParser = require('body-parser');
const mysql = require('mysql')

const app = express()


app.use(cors())
app.use(bodyParser.urlencoded({ extended: true })); // if req.body is undifined need to add this middleware!
app.use(express.json());  // if req.body is empty need to add this middleware!


const db = mysql.createConnection({
    host:'us-cdbr-east-02.cleardb.com',
    user:'b07242c6c1a68c',
    password:'899c34cc',
    database:'heroku_286ac6af63ec39b'
})

db.connect((err)=>{
    if(err)
        console.log(err)
    else{
        console.log('database connected!')
    }

})


setInterval(function () {
    db.query('SELECT 1');
}, 5000);

app.get('/users', (req, res)=>{
    const sql = 'SELECT * from notes';

    db.query(sql, (err, result) =>{
        if(err){
            console.log(err)
        }
        else{
            console.log(result)
        }
    })

    res.json('Sending users')
})

app.get('/', (req, res) =>{

    res.json("server is running")
})

app.get('/allposts', (req, res) =>{
    console.log('all posts request was made')

    const sql = 'SELECT * from notes';
    db.query(sql, (err, result) =>{
        if(err){
            console.log(err)
        }
        else{
            // console.log('result from mysql: ',JSON.stringify(result))
            console.log(typeof result)
            res.json(result)
        }
    })
    
})

app.post('/addpost', (req, res) =>{
    console.log('add post request was made')
    console.log(req.body)
    res.json({msg:"post was added!"})
})

const PORT = 3000
app.listen(PORT, () =>{
    console.log('server is running on PORT: ',PORT)

})