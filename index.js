const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const path = require("path");
const app = express();
const port = 8000;

mongoose.connect("mongodb+srv://karanvd2002:kd1234@cluster000.me3p6tx.mongodb.net/data", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const detail = new mongoose.Schema({
    name: String,
    email: String,
    password: String,

});
var data = mongoose.model("data", detail);
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));

app.use("/static", express.static("static"));
// app.use(express.urlencoded());

app.get("/", (req, res) => {
    res.writeHead(200, { "content-type": "text/html" });

});
app.post("/postdata", (req, res) => {
    var myData = new data(req.body);
    myData
        .save()
        .then(() => {
            res.send("success...");
        })
        .catch(() => {
            res.status(400).send("not found");
        });
    // res.status(200).render("contect.pug", params);
});


app.put('/Editdata', async (req, res) => {
    try {
        const abc = await req.body.id
        const alldata = await data.findById(abc)
        return res.send({ datas: alldata })
    } catch (error) {
        console.log('error::: ', error);
        return res.send({ err: error });
    }
})

app.delete("/removeData", (req, res) => {
    // console.log('req.body.id::: ', req.body.id);
    data.findByIdAndRemove(req.body.id).then(() => {
        res.send("delete");
    });
})

app.listen(port, () => {
    console.log('OK', port);
});
