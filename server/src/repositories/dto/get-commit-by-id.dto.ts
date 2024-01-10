import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class GetCommitByIdDto {
  @ApiProperty()
  @IsString()
  owner: string;

  @ApiProperty()
  @IsString()
  repository: string;

  @ApiProperty()
  @IsString()
  oid: string;
}