import { Request, Response } from 'express';
import { AddressRepository } from '../../repositories/address/implementations/AddressRepository';
import { UpdateAddress } from '../../useCases/address/update_address';
import { addressValidationGroup } from '../../validators/addressValidations/addressValidationGroup';

export class UpdateAddressController {
  public async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const { endereço, numero, complemento, cep, cidade, estado } = req.body;

      const addressRepository = new AddressRepository();
      const service = new UpdateAddress(
        addressRepository,
        addressValidationGroup,
      );

      const address = await service.execute({
        id,
        endereço,
        numero,
        complemento,
        cep,
        cidade,
        estado,
      });

      return res.status(200).json(address);
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }
}
