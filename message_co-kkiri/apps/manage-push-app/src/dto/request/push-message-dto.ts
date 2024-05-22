import { IsArray, IsObject, IsString } from 'class-validator';

export class PushMessageDto {
  @IsArray()
  tokenId: Array<string>;

  @IsString()
  title: string;

  @IsString()
  body: string;

  @IsObject()
  data: object;
}
