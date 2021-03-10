import { Request, Response } from 'express';
import { AddressRepository } from '../../repositories/address/implementations/AddressRepository';
import { ShowAddress } from '../../useCases/address/show_address';

export class ShowAddressController {
  public async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const addressRepository = new AddressRepository();
      const service = new ShowAddress(addressRepository);

      const address = await service.execute(id);

      return res.status(200).json(address);
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }
}
