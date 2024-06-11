import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AssignmentModuleBase } from "./base/assignment.module.base";
import { AssignmentService } from "./assignment.service";
import { AssignmentController } from "./assignment.controller";
import { AssignmentResolver } from "./assignment.resolver";

@Module({
  imports: [AssignmentModuleBase, forwardRef(() => AuthModule)],
  controllers: [AssignmentController],
  providers: [AssignmentService, AssignmentResolver],
  exports: [AssignmentService],
})
export class AssignmentModule {}
