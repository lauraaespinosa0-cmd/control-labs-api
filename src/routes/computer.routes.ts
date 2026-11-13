import { Router } from 'express';
import { ComputerController } from '../Controllers/computer.controller';

const router = Router();

router.get('/search', ComputerController.getComputerByFilter);
router.post('/', ComputerController.createComputer);
router.put('/:id/accept', ComputerController.getComputerById);
router.get('/:id', ComputerController.acceptComputerInventory);
router.patch('/:id/accept',ComputerController.changeComputerStatus)

export default router;