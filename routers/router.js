import { Router } from 'express';
import { home , insertPost , getallPosts ,giveLike} from '../controllers/controller.js';

let router = Router()

router.get('/',home)
router.get('/posts',getallPosts)
router.post('/post',insertPost)
router.put('/post',giveLike)

export {
    router
}