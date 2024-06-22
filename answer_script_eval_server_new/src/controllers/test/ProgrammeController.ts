import { Request, Response } from 'express';
import { AppDataSource } from '../../../data-source';
import { Programme } from '../../entity/Programme.entity';

export class ProgrammeController {
  getAllProgrammes = async (req: Request, res: Response) => {
    try {
      const programmeRepository = AppDataSource.getRepository(Programme);
      const programmes = await programmeRepository.find();

      res.status(200).send({
        success: true,
        message: 'All programmes fetched successfully.',
        data: programmes,
      });
    } catch (error) {
      console.error(
        `getAllProgrammes error [${new Date().toString()}]:  ${error}`,
      );
      res.status(404).send({
        success: false,
        message: 'Error in fetching programmes, please try after sometime.',
        data: [],
      });
    }
  };
}
