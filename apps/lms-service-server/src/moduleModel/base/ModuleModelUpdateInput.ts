/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AssignmentUpdateManyWithoutModuleModelsInput } from "./AssignmentUpdateManyWithoutModuleModelsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { CourseWhereUniqueInput } from "../../course/base/CourseWhereUniqueInput";

@InputType()
class ModuleModelUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AssignmentUpdateManyWithoutModuleModelsInput,
  })
  @ValidateNested()
  @Type(() => AssignmentUpdateManyWithoutModuleModelsInput)
  @IsOptional()
  @Field(() => AssignmentUpdateManyWithoutModuleModelsInput, {
    nullable: true,
  })
  assignments?: AssignmentUpdateManyWithoutModuleModelsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  content?: string | null;

  @ApiProperty({
    required: false,
    type: () => CourseWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CourseWhereUniqueInput)
  @IsOptional()
  @Field(() => CourseWhereUniqueInput, {
    nullable: true,
  })
  course?: CourseWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;
}

export { ModuleModelUpdateInput as ModuleModelUpdateInput };
