import { Module } from "@nestjs/common";
import { BirthdayModuleBase } from "./base/birthday.module.base";
import { BirthdayService } from "./birthday.service";
import { BirthdayController } from "./birthday.controller";
import { BirthdayResolver } from "./birthday.resolver";

@Module({
  imports: [BirthdayModuleBase],
  controllers: [BirthdayController],
  providers: [BirthdayService, BirthdayResolver],
  exports: [BirthdayService],
})
export class BirthdayModule {}
