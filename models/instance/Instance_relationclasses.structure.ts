import { UUID } from "../meta/Metamodel_metaobjects.structure";
import { ClassInstance } from "./Instance_classes.structure";
import { RoleInstance } from "./Instance_roles.structure";
import { Transform, Type } from "class-transformer";

// eslint-disable-next-line @typescript-eslint/ban-types
function transformLinePoints(value: string | {}[] | null) {
  const toReturn = [];
  if (value) {
    for (const currObject of value) {
      toReturn.push(
        typeof currObject == "string" ? JSON.parse(currObject) : currObject
      );
    }
    return toReturn;
  }
}

export class RelationclassInstance extends ClassInstance {
  @Type(() => Object)
  @Transform(({ value }) => transformLinePoints(value), { toClassOnly: true }) //convert the plain text to proper json
  // eslint-disable-next-line @typescript-eslint/ban-types
  public line_points: object[]; //added by @fabian --> this stores the function obtained by the metamodel --> geometry
  @Type(() => RoleInstance) public role_instance_from: RoleInstance;
  @Type(() => RoleInstance) public role_instance_to: RoleInstance;

  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(
    uuid: UUID,
    uuidRelationclass: UUID,
    role_from: RoleInstance,
    role_to: RoleInstance,
    linePoints?: object[]
  ) {
    super(
      uuid,
        uuidRelationclass,
      uuidRelationclass,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined
    );
    if (role_from) {
      this.role_instance_from = role_from;
    }

    if (role_to) {
      this.role_instance_to = role_to;
    }
    if (linePoints) {
      this.line_points = linePoints;
    } else {
      this.line_points = [];
    }
  }

  get_role_instance_from(): RoleInstance {
    return this.role_instance_from;
  }

    get_role_instance_to(): RoleInstance {
    return this.role_instance_to;
  }

    get_line_points(): object[] {
    return this.line_points;
  }

    set_line_points(linePoints: object[]): void {
    this.line_points = linePoints;
  }

    set_role_instance_from(roleInstance: RoleInstance): void {
    this.role_instance_from = roleInstance;
  }

    set_role_instance_to(roleInstance: RoleInstance): void {
    this.role_instance_to = roleInstance;
  }

add_line_point(linePoint: object): void {
    this.line_points.push(linePoint);
  }

  set_relationclass_instance_uuid(uuid: UUID): void {
    this.uuid_relationclass = uuid;
  }

  get_relationclass_uuid(): UUID | undefined {
    return super.get_relationclass_uuid();
  }

  set_class_instance_uuid(uuid: UUID): void {
    this.uuid_class = uuid;
  }



}
