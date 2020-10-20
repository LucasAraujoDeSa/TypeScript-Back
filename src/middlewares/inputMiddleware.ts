import {Request, Response, NextFunction} from 'express'

export const PostMiddleware = async(req:Request, res:Response, next:NextFunction) =>{

    const{title, description, body} = req.body//get all dates from body

    try{
        if(!title || typeof title === undefined || title === null)
            return res.status(400).json({err:'title not informed!!'})
        
        if(!description || typeof description === undefined || description === null)
            return res.status(400).json({err:'description not informed!!'})

        if(!body || typeof body === undefined || body === null)
            return res.status(400).json({err:'body not informed!!'})
        
        next()
    }catch(err){
        return res.status(400).json({err: err.message})
    }
}