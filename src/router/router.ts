//express-Router
    import {Router} from 'express'
    //Router-config
        const router = Router()

//controller 🎮
    //Post-Controller
        import PostController from '../controllers/PostController'
//middleware    
    import {PostMiddleware} from '../middlewares/inputMiddleware'

//routers  
    //router-Posts
        router.post('/posts/new', PostMiddleware, PostController.create)
        router.get('/posts/index', PostController.index)
        router.delete('/posts/delete/:id', PostController.delete)
        router.get('/posts/show/:id', PostController.show)
        router.put('/posts/update/:id',PostMiddleware, PostController.update)

//export 
    export default router