import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { GetCommitByIdDto } from './dto/get-commit-by-id.dto';
import { Octokit } from '@octokit/rest';
import 'isomorphic-fetch';

@Injectable()
export class RepositoriesService {

  private octokit: Octokit;

  constructor(
  ) {
    this.octokit = new Octokit();
  }
  async getCommitById({ owner, repository: repo, oid: ref }: GetCommitByIdDto) {
    try {
      const response = await this.octokit.repos.getCommit({
        owner,
        ref,
        repo
      });
      return response.data;
    } catch (error) {
      if (error) {
        throw new HttpException(error.message || 'Unable to process request', HttpStatus.BAD_REQUEST);
      }
    }
  }
}
