import express, { urlencoded } from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()
(async()=>{
    try {
        await app.on("error",(error)=>{
            console.log("ERROR:",error);
            throw error
        })

    } catch (error) {
        console.log("ERROR:", error);
    }
})

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"18kb"}))
app.use(express.urlencoded({extended:true,limit:"18kb"}))
app.use(express.static("public"))
app.use(cookieParser())

export { app }