import { Request, Response } from 'express';
import shortId from 'shortid';

export class urlcontroller{
      public async shorten(req: Request, rep: Response): Promise<void>{
            //Verificando se a URL já existe ou Não

            //Crar o HASH para a URL

            const { originURL } = req.body;
            const hash = shortId.generate();

            //Salvar a URL no banco

            //Retornar a URL que foi salva

      }
}