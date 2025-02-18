import {Router} from 'express'
import userRouter from './user.route.js';
import flashcardRouter from './flashcard.route.js';

const apiRouter = Router()

apiRouter.use("/user", userRouter);
apiRouter.use("/flashcards", flashcardRouter);


export default apiRouter;
