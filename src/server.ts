import express from "express"
import { routes } from './infra/routes/routes';
import cors from 'cors';
import { AppDataSource } from './data-source';
import { config } from "dotenv";
import AmazonSimpleEmailService from "./infra/services/aws-mail.service";

AppDataSource.initialize().then(() => {
    AppDataSource.runMigrations()
    const app = express()

    config();

    app.listen(3030, () => {
        console.log('Server is running...')
    })

    app.use(express.json())
    app.get('/', (req, res) => {
        return res.json("teste")
    })
    app.use(routes)
    app.use(
        cors({
            origin: '*',
            exposedHeaders: "*",
            methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
            credentials: true
        })
    );

    // setup all email templates
    // AmazonSimpleEmailService.createOrUpdateTemplates();

})

