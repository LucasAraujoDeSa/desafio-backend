import { Request, Response } from 'express';
import { AddressRepository } from '../../repositories/address/implementations/AddressRepository';
import { ListAddress } from '../../useCases/address/list_address';

export class ListAddressController {
  public async handle(req: Request, res: Response): Promise<Response> {
    try {
      const addressRepository = new AddressRepository();
      const service = new ListAddress(addressRepository);

      const address = await service.execute();

      return res.status(200).json(address);
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }
}
