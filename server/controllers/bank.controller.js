
const { Account } = require('../dataBase-mongo/bank.model')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const accessTokenSecret = 'jr9YqBEJhUVVXfSb';




// const db=require('../dataBase-sql')

// const getOneUser=async(req,res)=>{
//     console.log(req.body.query)
//     let sql=parseInt(req.body.query)
//     if(typeof sql!='number'){
//         sql=`SELECT * From user where email=${req.body.query} AND password=${req.body.password}`
//     }
//     else{ sql=`SELECT * From user where phoneNumber=${req.body.query} AND password=${req.body.password}`}

//     try{
//         let test=await db.query(sql)
//         if(test===[]){
//             res.status(200).send("User doesn't exist or wrong password")
//         }
//         else{
//        res.status(200).send(test[0])}
//     } catch(err){
//         res.status(500).send(err)
//     }
// }
// const addUser=async (req,res)=>{
//     let sql=`INSERT into user firstName=${req.body.firstName} lastName=${req.body.lastName} email=${req.body.email} phoneNumber=${req.body.phoneNumber} password=${req.body.password} verified=false`
//     try{
//         let test=await db.query(sql)
//         res.status(201).send(test[0])
//     } catch(err){
//         res.status(501).send(err)
//     }
// }
//     const getAllUsers=async (req,res)=>{
//         let sql=`SELECT * From user`
//         try{
//             let test=await db.query(sql)
//                 res.status(200).send(test[0])
//         } catch(err){
//             res.status(500).send(err)
//         }
//     }

const addUser = async (req, res) => {
    let obj = req.body

    obj.balance = 20000
    obj.verified = false
    const hash = await bcrypt.hash(obj.password, saltRounds, async (err, hash) => {
        obj.password = hash
        try {
            console.log(obj)
            let test = await Account.create(obj)
            res.status(201).send(test)
        } catch (err) {
            res.status(501).send(err)
        }
    });
}
const getAllUsers = async (req, res) => {
    try {
        let test = await Account.find({})
        res.status(200).send(test)
    } catch (err) {
        res.status(500).send(err)
    }
}
const getOneUser = async (req, res) => {
    let obj
    let q = parseInt(req.body.query)
    if (q - 0) {
        obj = {
            phoneNumber: req.body.query
        }
    } else {
        obj = {
            email: req.body.query
        }
    }
    try {
        let test = await Account.findOne(obj)
        console.log(req.body)
        bcrypt.compare(req.body.password, test.password, function (err, result) {
            if (result === true) {
                console.log("login result:", result)
                const accessToken = jwt.sign({ phoneNumber: obj.phoneNumber }, accessTokenSecret);
                res.json({ ...test, accessToken: accessToken })
            }
            else {
                res.status(200).send("wrong password or query")
            }
        });
    } catch (err) {
        res.status(500).send(err)
    }
}
const transfer = async (req, res) => {
    let from = await Account.findById(req.params.from)
    let to = await Account.findById(req.params.to)
    let history = from.history.push({ from: from.firstName + " " + from.lastName, to: to.firstName + " " + to.lastName, amount: parseInt(req.body.amount), date: new Date })
    let history1 = to.history.push({ from: from.firstName + " " + from.lastName, to: to.firstName + " " + to.lastName, amount: parseInt(req.body.amount), date: new Date })
    try {
        let test1 = await Account.findByIdAndUpdate(from._id, { balance: from.balance - parseInt(req.body.amount) })
        let testing1 = await Account.findByIdAndUpdate(from._id, { history: from.history })
        let testing2 = await Account.findByIdAndUpdate(to._id, { history: to.history })
        let test2 = await Account.findByIdAndUpdate(to._id, { balance: to.balance + parseInt(req.body.amount) })
        res.status(202).send("done")
    } catch (err) {
        console.log(err)
    }
}
const getOne = async (req, res) => {
    try {
        let test = await Account.findOne(req.body)
        res.send(test)
    } catch (err) {
        res.send(err)
    }
}
const updateName = async (req, res) => {
    try {
        test = await Account.findByIdAndUpdate(req.params.id, req.body)
        res.status(204).send(test)
    } catch (err) {
        res.send(err)
    }
}

module.exports = {
    getOneUser,
    addUser,
    getAllUsers,
    transfer, getOne, updateName
}