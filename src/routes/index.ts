import { Router } from 'express';
import loanRoutes from './loan.routes';
import userRouters from './user.routes';
import environmentRouters from './environment.routes'; 
import computerRoutes from './computer.routes'

const router = Router();
router.use('/loans', loanRoutes);
router.use('/users', userRouters);
router.use('/enviroments', environmentRouters)
router.use('/computers', computerRoutes)



export default router;