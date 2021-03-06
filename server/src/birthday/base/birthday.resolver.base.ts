/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateBirthdayArgs } from "./CreateBirthdayArgs";
import { UpdateBirthdayArgs } from "./UpdateBirthdayArgs";
import { DeleteBirthdayArgs } from "./DeleteBirthdayArgs";
import { BirthdayFindManyArgs } from "./BirthdayFindManyArgs";
import { BirthdayFindUniqueArgs } from "./BirthdayFindUniqueArgs";
import { Birthday } from "./Birthday";
import { BirthdayService } from "../birthday.service";

@graphql.Resolver(() => Birthday)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class BirthdayResolverBase {
  constructor(
    protected readonly service: BirthdayService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Birthday",
    action: "read",
    possession: "any",
  })
  async _birthdaysMeta(
    @graphql.Args() args: BirthdayFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Birthday])
  @nestAccessControl.UseRoles({
    resource: "Birthday",
    action: "read",
    possession: "any",
  })
  async birthdays(
    @graphql.Args() args: BirthdayFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Birthday[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Birthday",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Birthday, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Birthday",
    action: "read",
    possession: "own",
  })
  async birthday(
    @graphql.Args() args: BirthdayFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Birthday | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Birthday",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Birthday)
  @nestAccessControl.UseRoles({
    resource: "Birthday",
    action: "create",
    possession: "any",
  })
  async createBirthday(
    @graphql.Args() args: CreateBirthdayArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Birthday> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Birthday",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Birthday"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Birthday)
  @nestAccessControl.UseRoles({
    resource: "Birthday",
    action: "update",
    possession: "any",
  })
  async updateBirthday(
    @graphql.Args() args: UpdateBirthdayArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Birthday | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Birthday",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Birthday"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Birthday)
  @nestAccessControl.UseRoles({
    resource: "Birthday",
    action: "delete",
    possession: "any",
  })
  async deleteBirthday(
    @graphql.Args() args: DeleteBirthdayArgs
  ): Promise<Birthday | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
