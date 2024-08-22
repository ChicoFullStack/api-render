const express = require('express');
app = express();
const productionExpressRoute = express.Router();
let ProductionSchema = require('../model/production');
let OperadorSchema = require('../model/operador');
let ClienteSchema = require("../model/cliente");
let TagsSchema = require( "../model/listaTags" );

//**************************************************************/
productionExpressRoute.get('/list', async (req, res) => {

    try {
        const data = await ProductionSchema.find({});
        // select * from table
        res.json(data);
    } catch (err) {
        throw err;
    }
});

productionExpressRoute.get('/list-cliente', async (req, res) => {

    try {
        const data = await ClienteSchema.find({});
        // select * from table
        res.json(data);
    } catch (err) {
        throw err;
    }
});

productionExpressRoute.get('/list-operador', async (req, res) => {

    try {
        const data = await OperadorSchema.find({});
        // select * from table
        res.json(data);
    } catch (err) {
        throw err;
    }
});

productionExpressRoute.get('/list-tags', async (req, res) => {

    try {
        const data = await TagsSchema.find({});
        // select * from table
        res.json(data);
    } catch (err) {
        throw err;
    }
});


//**************************************************************/



//Trazer o ultimo  registro da produção
productionExpressRoute.get('/list-one', async (req, res) => {

    try {
        const data = await ProductionSchema.find({}).limit(1).sort({ $natural: -1 });
        res.json(data);
        
    } catch (err) {
        throw err;
    }
});

//Trazer o ultimo  registro da produção
productionExpressRoute.get('/list-one-cliente', async (req, res) => {

    try {
        const data = await ClienteSchema.find({}).limit(1).sort({ $natural: -1 });
        res.json(data);
        
    } catch (err) {
        throw err;
    }
});

productionExpressRoute.get('/list-one-operador', async (req, res) => {

    try {
        const data = await OperadorSchema.find({}).limit(1).sort({ $natural: -1 });
        res.json(data);
        
    } catch (err) {
        throw err;
    }
});

productionExpressRoute.get('/list-one-tag', async (req, res) => {

    try {
        const data = await TagsSchema.find({}).limit(1).sort({ $natural: -1 });
        res.json(data);
        
    } catch (err) {
        throw err;
    }
});


//**************************************************************/

productionExpressRoute.get('/cat/:id', async (req, res) => {

    try {
        id = req.params.id
        const data = await ProductionSchema.findById(id);
        //Ex: select * from abc where id = 2
        res.json(data);

    } catch (err) {
        throw err;
    }
});
//Adiciona cliente ***********************************************
productionExpressRoute.post('/add-cliente/', async (req, res) => {

    const data = new ClienteSchema({
        id : req.body.id,
        nome: req.body.nome,
        cpf: req.body.cpf,
        cnpj: req.body.cnpj,
        tipo: req.body.tipo,
        email: req.body.email,
        usuario: req.body.usuario,
        senha: req.body.senha,
        login: req.body.login
    })

    try {
        const datas = await data.save();
        res.status(200).json(datas);

    } catch (err) {
        res.status(400).json({ Message: err.message });
    }
});

//Adiciona operador **********************************************
productionExpressRoute.post('/add-operador/', async (req, res) => {

    const data = new OperadorSchema({
        id : req.body.id,
        nome: req.body.nome,
        cargo: req.body.cargo,
        turno: req.body.turno,
        cpf: req.body.cpf,
        email: req.body.email,
        usuario: req.body.usuario,
        senha: req.body.senha,
        login: req.body.login
    })

    try {
        const datas = await data.save();
        res.status(200).json(datas);

    } catch (err) {
        res.status(400).json({ Message: err.message });
    }
});

//Adiciona tags **************************************************
productionExpressRoute.post('/add-tag/', async (req, res) => {

    const data = new TagsSchema({
        id : req.body.id,
        nome: req.body.nome,
        value: req.body.value,
        quality: req.body.quality,
        itenId: req.body.itenId,
        descricao: req.body.descricao
    })

    try {
        const datas = await data.save();
        res.status(200).json(datas);

    } catch (err) {
        res.status(400).json({ Message: err.message });
    }
});

//Adiciona operação **********************************************
productionExpressRoute.post('/add-cat/', async (req, res) => {

     const data = new ProductionSchema({
        U_DEFEITUOSA_W : req.body.U_DEFEITUOSA_W,
        date: req.body.date,
        INICIO_PROCESS_B: req.body.INICIO_PROCESS_B,
        FIM_PROCESS_B: req.body.FIM_PROCESS_B,
        TEMPERATURA_W: req.body.TEMPERATURA_W,
        V_INICIO_PROCESS_W: req.body.V_INICIO_PROCESS_W,
        TOTAL_W: req.body.TOTAL_W,
        T_PARADO_W: req.body.T_PARADO_W,
        P_REALIZDA_W: req.body.P_REALIZDA_W,
        T_PRODUZIDO_W: req.body.T_PRODUZIDO_W,
        id: req.body.id,
        MAQ_LIG_DES_B: req.body.MAQ_LIG_DES_B,
        time: req.body.time,
        T_PLANEJADO_W: req.body.T_PLANEJADO_W,
        V_FIM_PROCESS_W: req.body.V_FIM_PROCESS_W,
        V_PRODUCAO_W: req.body.V_PRODUCAO_W
    })

    try {
        const datas = await data.save();
        res.status(200).json(datas);

    } catch (err) {
        res.status(400).json({ Message: err.message });
    }
});

//**************************************************************/

productionExpressRoute.delete('/cat-del/:id', async (req, res) => {

    try {
        id = req.params.id
        const data = await ProductionSchema.findByIdAndDelete(id);
        //Ex: select * from abc where id = 2
        res.send(`Document with ${data.id} has been deleted!`);

    } catch (err) {
        throw err;
    }
});
productionExpressRoute.put('/cat-update/:id', async (req, res) => {

    try {
        id = req.params.id
        const updateData = req.body;
        const options = { new: true };

        const result = await ProductionSchema.findByIdAndUpdate(
            id, updateData, options
            );
            
            res.send(result)        

    } catch (err) {
        res.status(400).json({ Message: err.message });
    }
});


module.exports = productionExpressRoute;
