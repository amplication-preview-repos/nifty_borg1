import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ModuleModelService } from "./moduleModel.service";
import { ModuleModelControllerBase } from "./base/moduleModel.controller.base";

@swagger.ApiTags("moduleModels")
@common.Controller("moduleModels")
export class ModuleModelController extends ModuleModelControllerBase {
  constructor(
    protected readonly service: ModuleModelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
