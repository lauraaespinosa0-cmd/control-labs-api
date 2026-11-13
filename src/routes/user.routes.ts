import { Router } from 'express';
import { UserController } from '../Controllers/user.controller';
import { validateUserPayload } from '../middlewares/validateUser.middleware';

const router = Router();

router.get('/search', UserController.getUsersByFilter);
router.post('/', validateUserPayload, UserController.createUser);
router.put('/:id/accept', UserController.acceptUserInventory);
router.get('/:id', UserController.getUserById);
router.patch('/:id/accept',UserController.changeUserEmail)
router.patch('/:id/status',UserController.changeUserStatus)

export default router;