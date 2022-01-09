require('dotenv').config()
const express=require('express')
const cors=require('cors')
const cookieParser=require('cookie-parser')
const sequelize=require('./db')
const models=require('./models/models')
const router=require('./router')
const errorMiddleware=require('./middlewares/errorMiddleware')

const PORT=process.env.PORT
const app=express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use('/api', router)
app.use(errorMiddleware)

const start=async()=>{
    try {
        await sequelize.authenticate()
		await sequelize.sync({force: false})
        app.listen(PORT, ()=>console.log(`Server started on PORT=${PORT}`))
    } catch (e) {
        console.log(e)
    }
}
start()