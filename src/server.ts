//dependecys 
    import express from 'express'
    import * as dotenv from 'dotenv'

//imports ✈
    import './data/connection'
    import router from './router/router'

//config ☸
    //express
        const app = express()
    //json
        app.use(express.json())
    //router
        app.use(router)
    //dotenv
        dotenv.config()

//Port 🚪
    const PORT = process.env.PORT || 3333
    app.listen(PORT,()=>{console.log('server 🚀')})




