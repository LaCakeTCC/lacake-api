import { Request, Response} from "express"
import { CreateProductService } from "../services/CreateProductService"


class CreateProductController{
  async handle(request: Request, response: Response ){
  const {  nameproduto, imagem, description, disponibilidade, preco, unidade } = request.body;

  const createProductService = new CreateProductService();

   const product = await createProductService.execute({ nameproduto, imagem, description, disponibilidade, preco, unidade});

   return response.json(product)

  }
}

export { CreateProductController }
