import path from 'path';
import { crearPost, likePost, getPosts } from '../models/queries.js';

let __dirname = path.resolve()

let home = (req,res) => {
    res.sendFile(__dirname + '/views/index.html')
}

let insertPost = async (req,res) => {
    let { usuario , urlPost , descripcion } = req.body;
    console.log(usuario, urlPost , descripcion)
    let response = await crearPost(usuario,urlPost,descripcion);
    res.send(response);
}


let getallPosts = async (req,res) => {
    let response = await getPosts();
    res.send(response);
}

let giveLike = async (req,res) => {
    let { id } = req.query;
    console.log(id);
    let response = await likePost(id);
    res.send(response);
}







export {
    home,
    insertPost,
    giveLike,
    getallPosts
}