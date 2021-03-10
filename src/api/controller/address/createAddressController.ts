import { Request, Response } from 'express';
import { AddressRepository } from '../../repositories/address/implementations/AddressRepository';
import { CreateAddress } from '../../useCases/address/create_address';
import { addressValidationGroup } from '../../validators/addressValidations/addressValidationGroup';

export class CreateAddressController {
  public async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.user;
      const { endereço, numero, complemento, cep, cidade, estado } = req.body;

      const addressRepository = new AddressRepository();
      const service = new CreateAddress(
        addressRepository,
        addressValidationGroup,
      );

      const address = await service.execute({
        user_id: id,
        endereço,
        numero,
        complemento,
        cep,
        cidade,
        estado,
      });

      return res.status(201).json(address);
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }
}
