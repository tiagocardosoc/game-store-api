import Router from 'express'
import AuthRoute from './auth.route'

const route = Router()

export const routes = [
    route.post('/', (req, res) => {
        res.status(200).send('okx s xD')
    }),

    AuthRoute
]