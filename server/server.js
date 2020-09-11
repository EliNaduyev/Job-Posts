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

// --------- DB Configs ---------

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

// --------- general management ---------

app.get('/', (req, res) =>{

    res.json("server is running")
})

// --------- users management ---------


app.post('/adduser', (req, res) =>{
    console.log('add user request was made')
    console.log(req.body)
    const {id, userName, password, email} = req.body

    const sql = 'INSERT INTO users (user_id, user_name, user_pass, user_email)'+
    'values (?,?,?,?);'

    db.query(sql, [id, userName, password, email],(err, result) =>{
        if(err){
            console.log(err)
            return res.json({err:err})
        }
        else{            
            console.log('result: ',result)
            return res.json({msg:'user added!'})
        }
    })
})


app.post('/checkuser', (req, res) =>{
    console.log('check user request was made')
    console.log('body of msg is: ',req.body)
    const { username } = req.body

    const sql = 'SELECT * FROM users WHERE user_name=?;'


    db.query(sql, [ username ],(err, result) =>{
        if(err) return res.json({err:err})
        else{  
            console.log('result: ',result)
            if(result[0]) return res.json({msg:true})
            else return res.json({msg:false})    
        }
    })
})


app.post('/getuser', (req, res) =>{
    console.log('get user request was made')
    console.log(req.body)
    const { username, pass } = req.body
    const sql = 'SELECT * FROM users WHERE user_name=?;'

    db.query(sql, [username],(err, result) =>{
        if(err){
            console.log(err)
            return res.json({msg:err})
        }
        else{            
            console.log('result is: ',result)
            if(result[0]){
                console.log('user name exist!')
                const { user_pass } = result[0]
                if(user_pass !== pass){
                    res.json({err:"Wrong password or username"})
                }
                else{return res.json({data:result[0]})}
            }
            else{return res.json({err:"Wrong password or username"})}
        }
    })
})

// --------- posts management ---------



app.get('/allposts', (req, res) =>{
    console.log('all posts request was made')

    const sql = 'SELECT * from notes';
    db.query(sql, (err, result) =>{
        if(err){
            console.log(err)
        }
        else{
            res.json(result)
        }
    })
    
})

app.post('/addpost', (req, res) =>{
    console.log('add post request was made')
    console.log(req.body)
    const {title, education, desc, email, tel, date} = req.body
    console.log('type of: ',typeof tel)

    const sql = 'INSERT INTO notes (title, education) values (?,?,?,?,?,?);'

    db.query(sql, [title, education, desc, email, tel, date],(err, result) =>{
        if(err){
            console.log(err)

            res.json({msg:err})
        }
        else{            
            console.log('result: ',result)
            res.json({msg:result})
        }
    })
})

const PORT = 3000
app.listen(PORT, () =>{
    console.log('server is running on PORT: ',PORT)

})