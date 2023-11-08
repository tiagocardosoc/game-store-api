import express from 'express'
import { routes } from './infra/routes/routes'
import cors from 'cors'

const app = express()

app.listen(3030, () => {
    console.log('Server is running...')
})

app.use(express.json())
app.use(routes)
app.use(
    cors({
        origin: '*',
        exposedHeaders: "*",
        methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
        credentials: true
    })
);