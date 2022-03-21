import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { BirthdayResolverBase } from "./base/birthday.resolver.base";
import { Birthday } from "./base/Birthday";
import { BirthdayService } from "./birthday.service";

@graphql.Resolver(() => Birthday)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class BirthdayResolver extends BirthdayResolverBase {
  constructor(
    protected readonly service: BirthdayService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
