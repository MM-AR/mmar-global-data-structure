import {UUID} from "../meta/Metamodel_metaobjects.structure";
import {ObjectInstance} from "./instance_objects.structure";
import {ClassInstance} from "./Instance_classes.structure";
import {RoleInstance} from "./Instance_roles.structure";
import {PortInstance} from "./Instance_ports.structure";
import {RelationclassInstance} from "./Instance_relationclasses.structure";
import {Expose, Type} from "class-transformer";
import {AttributeInstance} from "./Instance_attributes.structure";

@Expose()
export class SceneInstance extends ObjectInstance {
    @Type(() => String) public uuid_scene_type: UUID;
    @Type(() => ClassInstance) public class_instances: ClassInstance[];
    @Type(() => RelationclassInstance)
    public relationclasses_instances: RelationclassInstance[];
    @Type(() => RoleInstance) public role_instances: RoleInstance[];
    @Type(() => AttributeInstance)
    public attribute_instances: AttributeInstance[];
    @Type(() => PortInstance) public port_instances: PortInstance[];

    constructor(
        uuid: UUID,
        uuidSceneType: UUID,
        classInstance?: ClassInstance[],
        roleInstance?: RoleInstance[],
        attributeInstance?: AttributeInstance[],
        portInstance?: PortInstance[],
        relationClasses?: RelationclassInstance[]
    ) {
        super(uuid);
        this.uuid_scene_type = uuidSceneType;
        if (classInstance) {
            this.class_instances = classInstance;
        } else {
            this.class_instances = [];
        }
        if (roleInstance) {
            this.role_instances = roleInstance;
        } else {
            this.role_instances = [];
        }
        if (attributeInstance) {
            this.attribute_instances = attributeInstance;
        } else {
            this.attribute_instances = [];
        }
        if (portInstance) {
            this.port_instances = portInstance;
        } else {
            this.port_instances = [];
        }
        if (relationClasses) {
            this.relationclasses_instances = relationClasses;
        } else {
            this.relationclasses_instances = [];
        }
    }

    get_scene_type_uuid(): UUID {
        return this.uuid_scene_type;
    }

    get_class_instances(): ClassInstance[] {
        return this.class_instances;
    }

    get_role_instances(): RoleInstance[] {
        return this.role_instances;
    }

    get_attribute_instances(): AttributeInstance[] {
        return this.attribute_instances;
    }

    get_port_instances(): PortInstance[] {
        return this.port_instances;
    }

    get_relationclass_instances(): RelationclassInstance[] {
        return this.relationclasses_instances;
    }

    set_scene_type_uuid(uuid: UUID): void {
        this.uuid_scene_type = uuid;
    }

    set_class_instances(classInstances: ClassInstance[]): void {
        this.class_instances = classInstances;
    }

    set_role_instances(roleInstances: RoleInstance[]): void {
        this.role_instances = roleInstances;
    }

    set_attribute_instances(attributeInstances: AttributeInstance[]): void {
        this.attribute_instances = attributeInstances;
    }

    set_port_instances(portInstances: PortInstance[]): void {
        this.port_instances = portInstances;
    }

    set_relationclass_instances(relationclassInstances: RelationclassInstance[]): void {
        this.relationclasses_instances = relationclassInstances;
    }

    add_class_instance(classInstance: ClassInstance): void {
        this.class_instances.push(classInstance);
    }

    add_role_instance(roleInstance: RoleInstance): void {
        this.role_instances.push(roleInstance);
    }

    add_attribute_instance(attributeInstance: AttributeInstance): void {
        this.attribute_instances.push(attributeInstance);
    }

    add_port_instance(portInstance: PortInstance): void {
        this.port_instances.push(portInstance);
    }

    add_relationclass_instance(relationclassInstance: RelationclassInstance): void {
        this.relationclasses_instances.push(relationclassInstance);
    }

    remove_class_instance_by_uuid(uuid: UUID): void {
        this.class_instances = this.class_instances.filter(
            (classInstance) => classInstance.get_uuid() !== uuid
        );
    }

    remove_role_instance_by_uuid(uuid: UUID): void {
        this.role_instances = this.role_instances.filter(
            (roleInstance) => roleInstance.get_uuid() !== uuid
        );
    }

    remove_attribute_instance_by_uuid(uuid: UUID): void {
        this.attribute_instances = this.attribute_instances.filter(
            (attributeInstance) => attributeInstance.get_uuid() !== uuid
        );
    }

    remove_port_instance_by_uuid(uuid: UUID): void {
        this.port_instances = this.port_instances.filter(
            (portInstance) => portInstance.get_uuid() !== uuid
        );
    }

    remove_relationclass_instance_by_uuid(uuid: UUID): void {
        this.relationclasses_instances = this.relationclasses_instances.filter(
            (relationclassInstance) => relationclassInstance.get_uuid() !== uuid
        );
    }

    get_class_instance_difference(classInstanceToCompare: ClassInstance[]) {
        return this.get_collection_difference<ClassInstance>(classInstanceToCompare, this.class_instances);
    }

    get_role_instance_difference(roleInstanceToCompare: RoleInstance[]) {
        return this.get_collection_difference<RoleInstance>(roleInstanceToCompare, this.role_instances);
    }

    get_attribute_instance_difference(attributeInstanceToCompare: AttributeInstance[]) {
        return this.get_collection_difference<AttributeInstance>(attributeInstanceToCompare, this.attribute_instances);
    }

    get_port_instance_difference(portInstanceToCompare: PortInstance[]) {
        return this.get_collection_difference<PortInstance>(portInstanceToCompare, this.port_instances);
    }

    get_relationclass_instance_difference(relationclassInstanceToCompare: RelationclassInstance[]) {
        return this.get_collection_difference<RelationclassInstance>(relationclassInstanceToCompare, this.relationclasses_instances);
    }


}
