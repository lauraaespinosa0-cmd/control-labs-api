import { Router } from 'express';
import userRoutes from './user.routes';
import environmentRoutes from './environment.routes';
import equipmentRoutes from './equipment.routes';

const router = Router();

router.use('/users', userRoutes);
router.use('/environments', environmentRoutes);
router.use('/equipments', equipmentRoutes);

export default router;