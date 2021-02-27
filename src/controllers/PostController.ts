import Post from '../models/entity/PostModel'
import {Request,Response} from 'express'
import {  getRepository  } from 'typeorm'

class PostController{
    // new Posts
    async create(req:Request, res:Response){
        try{

            const{title, description, body} = req.body

            const PostRepository = getRepository(Post)

            const post = PostRepository.create({
                title,
                description,
                body
            })
            await PostRepository.save(post)

            return res.status(201).json({data: post})
        }catch(err){
            return res.status(400).json({err: err.message})
        }
    }

    //list all posts
    async index(req:Request, res:Response){
        try{
            const PostRepository = getRepository(Post)

            const posts = await PostRepository.find()

            return res.status(200).json({index: posts})
        }catch(err){

            return res.status(400).json({err: err.message})

        }
    }

    //Delete Posts
    async delete(req:Request, res:Response){
        try{
            const{id} = req.params


            const PostRepository = getRepository(Post)

            await PostRepository.delete(id)

            return res.status(200).json({data: 'post deleted'})
        }catch(err){
            return res.status(400).json({err: err.message})
        }
    }

    //show a unique post
    async show(req:Request, res:Response){
        try{
            const{id} = req.params

            const PostRepository = getRepository(Post)

            const post = await PostRepository.findOneOrFail(id)

            return res.status(200).json({data: post})
        }catch(err){
            return res.status(400).json({err: err.message})
        }
    }

    //update Posts
    async update(req:Request, res:Response){
        try{
            const{id} = req.params

            const{title, description, body} = req.body

            const PostRepository = getRepository(Post)

            const post = await PostRepository.findOneOrFail(id)

            post.title = title
            post.description = description
            post.body = body
            
            const result = await PostRepository.save(post)

            return res.status(200).json({data: result})
        }catch(err){
            return res.status(400).json({err: err.message})
        }
    }

}

export default new PostController()