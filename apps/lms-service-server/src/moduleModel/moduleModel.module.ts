import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ModuleModelModuleBase } from "./base/moduleModel.module.base";
import { ModuleModelService } from "./moduleModel.service";
import { ModuleModelController } from "./moduleModel.controller";
import { ModuleModelResolver } from "./moduleModel.resolver";

@Module({
  imports: [ModuleModelModuleBase, forwardRef(() => AuthModule)],
  controllers: [ModuleModelController],
  providers: [ModuleModelService, ModuleModelResolver],
  exports: [ModuleModelService],
})
export class ModuleModelModule {}
