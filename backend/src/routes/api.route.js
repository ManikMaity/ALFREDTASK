import {Router} from 'express'

const apiRouter = Router()

apiRouter.get('/', (req, res) => {
    res.json({msg: "api router working"})
})


export default apiRouter;
