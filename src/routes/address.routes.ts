import { Router } from 'express';
import { CreateAddressController } from '../api/controller/address/createAddressController';
import { DeleteAddressController } from '../api/controller/address/deleteAddressController';
import { ListAddressController } from '../api/controller/address/listAddressController';
import { ShowAddressController } from '../api/controller/address/showAddressController';
import { UpdateAddressController } from '../api/controller/address/updateAddressController';
import { AuthMiddleware } from '../api/middleware/authMiddleware';

const AddressRouter = Router();

const createAddressController = new CreateAddressController();
const showAddressController = new ShowAddressController();
const updateAddressController = new UpdateAddressController();
const deleteAddressController = new DeleteAddressController();
const listAddressController = new ListAddressController();

AddressRouter.use(AuthMiddleware);

AddressRouter.post('/', createAddressController.handle);
AddressRouter.get('/', listAddressController.handle);
AddressRouter.get('/:id', showAddressController.handle);
AddressRouter.put('/:id', updateAddressController.handle);
AddressRouter.delete('/:id', deleteAddressController.handle);

export { AddressRouter };
