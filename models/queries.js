import { pool } from "../config/db.js";

let crearPost = async (usuario,urlPost,descripcion) => {
    try {
        let sql = {
            text : "INSERT INTO posts (usuario,url,descripcion,likes) VALUES ($1,$2,$3,0) RETURNING *",
            values:[usuario,urlPost,descripcion]
        };
        let result = await pool.query(sql);
        if (result.rowCount >  1) {
            return result.rows;
        } else {
            return new Error("Algo ocurrió, no se hizo nada")
        }
    } catch (error) {
        console.log(error);
        console.log(error.message);
        console.log(error.code);
    }
}


let getPosts = async () => {
    try {
        let sql = {
            text : "SELECT * FROM posts",
        }
        let result = await pool.query(sql)
        if (result.rowCount >  1) {
            return result.rows;
        } else {
            return new Error("Algo ocurrió, no se hizo nada")
        }
    } catch (error) {
        console.log(error);
        console.log(error.message);
        console.log(error.code);  
    }
}


let likePost = async (id) => {
    try {
        let sql = {
            text : `UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *`,
            values : [id]
        }
        let result = await pool.query(sql);
        if (result.rowCount >  1) {
            return result.rows;
        } else {
            return new Error("Algo ocurrió, no se hizo nada")
        }
    } catch (error) {
        console.log(error);
        console.log(error.message);
        console.log(error.code);  
    }
}


export {
    crearPost,
    getPosts,
    likePost
}