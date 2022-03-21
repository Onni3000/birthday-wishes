import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { BirthdayServiceBase } from "./base/birthday.service.base";

@Injectable()
export class BirthdayService extends BirthdayServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
