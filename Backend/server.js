const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 4000;
const mongoose = require('mongoose');
const Blog = require('./blog.model')

app.use(cors());
// app.use(bodyParser.json());
app.use(express.json())


mongoose.connect("mongodb://localhost:27017/blog", { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> console.log("established"))
.catch((err)=> console.log(err));

app.post('/add', async (req, res) => {
    try{
        const blog = new Blog(req.body);
        const createBlog = await blog.save();
        // console.log('Here it is:', blog);
        res.status(201).send(createBlog);
    }catch(err){
        res.status(400).send(err);
    }
})

app.get('/', async (req, res) => {
    try{
        const resData = await Blog.find();
        res.send(resData);
    }catch(err){
        console.log("No, here");
        res.send(err)
    }
})

app.get('/blog/:id', async (req, res) => {
    try{
        const _id = req.params.id;
        // console.log("This is id", _id)
        const resData = await Blog.findById(_id)
        if(!resData){
            res.status(404).send();
        }else{
            res.send(resData);
        }
    }catch(err){
        res.send(err)
    }
})

app.patch('/update/:id', async (req, res) => {
    try{
        const resUpdate = await Blog.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        if(!req.params.id){
            return res.status(400).send();
        }
        res.send(resUpdate);
    }catch(err){
        res.status(400).send();
    }
})

app.delete('/delete/:id', async (req, res) => {
    try{
        const resDelete = await Blog.findByIdAndDelete(req.params.id);
        if(!req.params.id){
            return res.status(400).send();
        }
        res.send(resDelete);
    }catch(err){
        res.status(500).send(err);
    }
})

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});