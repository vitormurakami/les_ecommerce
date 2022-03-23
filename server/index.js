const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const PORT = 3001
const app = express();
app.use(express.json());
const db = require('./db');
const Cliente = require('./models/cliente.model')
app.use(bodyParser.urlencoded({extended:true}))

app.use(cors())


app.post('/server/login', async (req, res) => {
    
    try{
        const cliente = await Cliente.findOne({where: {email: req.body.email}})
        console.log(req.body)
        if(!cliente){
            return res.json({status: 'erro', message: 'User not found'})
        }

        if(!(cliente.password == req.body.password)){
            return res.json({status: 'erro', message: "Password invalid"})
        }

        res.json({status: 'User logged successfully', cliente})

    }catch (err){
        console.log(err)
        res.json({status: 'erro'})
        
    }
})

app.post('/server/register', async(req, res) => {
    console.log(req.body)

    try{
        db.sync()
        if(await Cliente.findOne({where: {email: req.body.email}})){
            return res.json({status: 'erro', message: "Email já cadastrado"})
        }

        Cliente.create({
            nome: req.body.nome,
            cpf: req.body.cpf,
            nascimento: req.body.nascimento,
            telefone: req.body.telefone,
            sexo: req.body.sexo,
            email: req.body.email,
            senha: req.body.senha
        })
        res.json({status: 'User registered successfully '})
    }catch (err){
        console.log(err)
        res.json({status: 'erro'})
    }
})

app.get('/server/onecustomer/:id', async(req, res) => {
    try{
        db.sync()
        const customer = await Cliente.findOne({where: {id: req.params.id}})
        
        if(!customer){
            return res.json({message: 'Customer not found!'})
        }
        console.log(customer)
        res.json(customer)
    }catch (err){
        console.log(err)
        res.json({message: 'erro'})
    }
})

app.post('/server/update', async(req, res) => {
    try{
        db.sync()
        await Cliente.update(
            {
                nome: req.body.nome,
                cpf: req.body.cpf,
                nascimento: req.body.nascimento,
                telefone: req.body.telefone,
                sexo: req.body.sexo,
                email: req.body.email,
                senha: req.body.senha
            }, {where: {id: req.body.id}}
        )
        res.json({status: 'User updated successfully'})
    }catch (err){
        console.log(err)
        res.json({status: 'erro'})
    }
})


app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}...`)
})
