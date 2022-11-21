import {
  Controller,
  Body,
  All,
  Query,
  Headers,
  Req,
  Param,
} from '@nestjs/common';
import { Request } from 'express';

import { EventNotifyService } from './event-notify.service';

@Controller('event-notify')
export class EventNotifyController {
  constructor(private readonly eventNotifyService: EventNotifyService) {}

  @All(':uuid')
  create(
    @Param('uuid') uuid: string,
    @Body() body: any,
    @Query() query: any,
    @Headers() headers: any,
    @Req() request: Request,
  ) {
    return this.eventNotifyService.create({
      uuid,
      body,
      query,
      headers,
      request,
    });
  }
}