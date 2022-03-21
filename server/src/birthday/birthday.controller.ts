import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BirthdayService } from "./birthday.service";
import { BirthdayControllerBase } from "./base/birthday.controller.base";

@swagger.ApiTags("birthdays")
@common.Controller("birthdays")
export class BirthdayController extends BirthdayControllerBase {
  constructor(
    protected readonly service: BirthdayService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
