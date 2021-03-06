import { Request, Response } from "express";
import { CreateConfigService } from "../services/CreateConfigService";


class CreateConfigController{
  async handle(request: Request, response: Response){
   const{nomeloja, editbio, cep, cidade, logradouro, bairro, numero, complemento, userId}= request.body;

   const createConfigService = new CreateConfigService();

   const config = await createConfigService.execute({nomeloja, editbio, cep, cidade, logradouro, bairro, numero, complemento, userId});

   return response.json(config)
}
  }


export { CreateConfigController}