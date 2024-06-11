import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AssignmentService } from "./assignment.service";
import { AssignmentControllerBase } from "./base/assignment.controller.base";

@swagger.ApiTags("assignments")
@common.Controller("assignments")
export class AssignmentController extends AssignmentControllerBase {
  constructor(
    protected readonly service: AssignmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
