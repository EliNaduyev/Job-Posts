const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const bodyParser = require('body-parser');
const mysql = require('mysql')
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true })); // if req.body is undifined need to add this middleware!
app.use(express.json());  // if req.body is empty need to add this middleware!
dotenv.config()

const db = mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASS,
    database:process.env.DB
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



// --------- users management ---------


app.post('/adduser', (req, res) =>{

    const {id, userName, password, email} = req.body
    const sql = 'INSERT INTO users (user_id, user_name, user_pass, user_email)'+
    'values (?,?,?,?);'
    db.query(sql, [id, userName, password, email],(err, result) =>{
        if(err){ return res.json({err:err})}
        else{ return res.json({msg:'user added!'})}
    })
})


app.post('/checkuser', (req, res) =>{

    const { username } = req.body
    const sql = 'SELECT * FROM users WHERE user_name=?;'
    db.query(sql, [ username ],(err, result) =>{
        if(err) return res.json({err:err})
        else{  
            if(result[0]) return res.json({msg:true})
            else return res.json({msg:false})    
        }
    })
})


app.post('/getuser', (req, res) =>{

    const { username, pass } = req.body
    const sql = 'SELECT * FROM users WHERE user_name=?;'

    db.query(sql, [username],(err, result) =>{
        if(err){return res.json({msg:err})}
        else{            
            if(result[0]){
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

    const sql = 'SELECT * from posts ORDER BY id DESC';
    db.query(sql, (err, result) =>{
        if(err){
            return res.json(err)
        }
        else{return res.json(result)}
    })
})

app.post('/addpost', (req, res) =>{

    const {title, education, desc, email, tel, date, username} = req.body
    let numOfPost;
    const sql2 = 'SELECT num_of_posts FROM users WHERE user_name =?'
    
    db.query(sql2, [username],(err, result) =>{
        if(err){return res.json({status:false, msg:err})}
        else{            
            numOfPost = result[0].num_of_posts
            if(numOfPost < 3){
                const sql = 'INSERT INTO posts (title, education, note_description, email, tel, pub_date, user_name) values (?,?,?,?,?,?,?);'
                db.query(sql, [title, education, desc, email, tel, date, username],(err, result) =>{
                    if(err){return res.json({status:false, msg:err})}
                    else{            
                        numOfPost = numOfPost + 1
                        const sql3 = 'UPDATE users SET num_of_posts =? WHERE user_name =?'
                        db.query(sql3,[numOfPost, username], (err, result) =>{
                            if(err){console.log(err)}
                            else{console.log(result)}
                        })
                        return res.json({status:true, msg:'Post Added!'})
                    }
                })
            }
            else{
                return res.json({status:false, msg:'Sorry but you reach the limit(3) of posts creation'})
            }
        }
    })
})


app.post('/deletepost', (req, res) =>{

    const {id, username} = req.body
    const sql = 'DELETE FROM posts WHERE id =? AND user_name =?';    
    db.query(sql,[id, username], (err, result) =>{
        if(err){return res.json({err:err})}
        else{
            const { affectedRows } = result
            if(affectedRows === 0){
                return res.json({status:false})
            }
            else{
               const sql2 = 'UPDATE users SET num_of_posts = num_of_posts - 1 WHERE user_name =? '
               db.query(sql2,[username], (err, result) =>{
                   if(err){console.log(err)}
                   else{console.log(result)}
                })
                return res.json({status:true})
            }
        }
    })
})

const PORT = 3000
app.listen(PORT || process.env.PORT, () =>{
    console.log('server is running on PORT: ',PORT)
})