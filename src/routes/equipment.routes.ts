import { Router } from 'express';
import { EquipmentController } from '../controllers/equipment.controller';

const router = Router();

router.get('/', EquipmentController.getEquipments); // Soporta ?environmentId=X
router.post('/', EquipmentController.createEquipment);
router.patch('/:id', EquipmentController.patchEquipmentStatus);

export default router;