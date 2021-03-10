import { Request, Response } from 'express';
import { AddressRepository } from '../../repositories/address/implementations/AddressRepository';
import { DeleteAddress } from '../../useCases/address/delete_address';

export class DeleteAddressController {
  public async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const addressRepository = new AddressRepository();
      const service = new DeleteAddress(addressRepository);

      await service.execute(id);

      return res.status(200).json('address deleted');
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }
}
