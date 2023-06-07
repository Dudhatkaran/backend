// const express = require('express');
// const app = express();

// const router = express.Router();
// app.use(express.json());

// const Crud = require('../MODEL/Schema');

// // Get all data
// // Get Api
// router.get('/', async (req, res) => {
//     try {
//         const cruds = await Crud.find({});
//         return res.send({ cruds })
//     } catch (err) {
//         return res.send({ error: err });
//     }
// });

// // Get add data
// // Post Api
// router.post('/add', async (req, res) => {
//     try {
//         const addCrud = await Crud.create({
//             name: req.body.name,
//             email: req.body.email,
//             password: req.body.password,
//         })
//         return res.send(addCrud);
//     } catch (err) {
//         return res.send({ error: err });
//     }
// });