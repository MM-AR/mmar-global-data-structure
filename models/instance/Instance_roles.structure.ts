import { UUID } from "../meta/Metamodel_metaobjects.structure";
import { ObjectInstance } from "./instance_objects.structure";
import { Type } from "class-transformer";

export class RoleInstance extends ObjectInstance {
  @Type(() => String) public uuid_role: UUID;
  @Type(() => String) public uuid_relationclass: UUID;
  @Type(() => String) public uuid_attribute_instance: UUID;
  @Type(() => String) public uuid_has_reference_class_instance: UUID;
  @Type(() => String) public uuid_has_reference_port_instance: UUID;
  @Type(() => String) public uuid_has_reference_scene_instance: UUID;
  @Type(() => String) public uuid_has_reference_attribute_instance: UUID;
  @Type(() => String) public uuid_has_reference_relationclass_instance: UUID;

  constructor(
    uuid: UUID,
    uuidRole: UUID,
    uuidRelationClass?: UUID,
    uuidAttributeInstance?: UUID,
    uuidReferenceClassInstance?: UUID,
    uuidReferencePortInstance?: UUID,
    uuidReferenceSceneInstance?: UUID,
    uuidReferenceAttributeInstance?: UUID,
    uuidReferenceRelationClassInstance?: UUID
  ) {
    super(uuid);
    this.uuid_role = uuidRole;

    if (uuidRelationClass) {
      this.uuid_relationclass = uuidRelationClass;
    }
    if (uuidAttributeInstance) {
      this.uuid_attribute_instance = uuidAttributeInstance;
    }
    if (uuidReferenceClassInstance) {
      this.uuid_has_reference_class_instance = uuidReferenceClassInstance;
    }
    if (uuidReferencePortInstance) {
      this.uuid_has_reference_port_instance = uuidReferencePortInstance;
    }
    if (uuidReferenceSceneInstance) {
      this.uuid_has_reference_scene_instance = uuidReferenceSceneInstance;
    }
    if (uuidReferenceAttributeInstance) {
      this.uuid_has_reference_attribute_instance =
        uuidReferenceAttributeInstance;
    }
    if (uuidReferenceRelationClassInstance) {
      this.uuid_has_reference_relationclass_instance =
        uuidReferenceRelationClassInstance;
    }
  }
}
