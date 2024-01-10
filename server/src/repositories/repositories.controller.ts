import { Controller, Get, HttpException, HttpStatus, InternalServerErrorException, Param } from '@nestjs/common';
import { RepositoriesService } from './repositories.service';
import { Http2ServerResponse } from 'http2';

@Controller('repositories')
export class RepositoriesController {

  constructor (
    private readonly repositoriesService: RepositoriesService
  ) { }

  @Get('/:owner/:repository/commits/:oid')
  async getCommitById(@Param('owner') owner: string, @Param('repository') repository: string, @Param('oid') oid: string,) {
    try {
      const response = await this.repositoriesService.getCommitById({ owner, repository, oid });
      return {
        status: HttpStatus.OK,
        data: { ...response },
      }
    } catch (error) {
      if (error) {
        throw new InternalServerErrorException(); 
      }
    }
  }

}
