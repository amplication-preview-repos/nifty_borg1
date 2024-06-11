import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ModuleModelResolverBase } from "./base/moduleModel.resolver.base";
import { ModuleModel } from "./base/ModuleModel";
import { ModuleModelService } from "./moduleModel.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ModuleModel)
export class ModuleModelResolver extends ModuleModelResolverBase {
  constructor(
    protected readonly service: ModuleModelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
