import {Attribute} from "./Metamodel_attributes.structure";
import {MetaObject, UUID} from "./Metamodel_metaobjects.structure";
import {Type} from "class-transformer";

export class Port extends MetaObject {
    @Type(() => String) public uuid_class: UUID | null;
    @Type(() => String) public uuid_scene_type: UUID | null;
    @Type(() => Attribute) public attributes: Attribute[];

    //fully or minimal
    constructor(
        uuid: UUID,
        name: string,
        classparam: UUID,
        scenetype: UUID,
        a?: Attribute[]
    ) {
        super(uuid, name);
        this.uuid_class = classparam;
        this.uuid_scene_type = scenetype;

        if (a) {
            this.set_attribute(a);
        } else {
            this.attributes = [];
        }
    }

    add_attribute(a: Attribute) {
        this.attributes.push(a);
    }

    remove_attribute(uuid: UUID) {
        this.attributes = this.attributes.filter((a) => a.get_uuid() !== uuid);
    }

    set_attribute(a: Attribute[]) {
        this.attributes = a;
    }

    get_attribute() {
        return this.attributes;
    }

    get_class() {
        return this.uuid_class;
    }

    set_class(cl: UUID) {
        this.uuid_class = cl;
    }

    get_sceneType() {
        return this.uuid_scene_type;
    }

    set_sceneType(sceneType: UUID) {
        this.uuid_scene_type = sceneType;
    }

    get_attributes_difference(attribute_to_compare: Attribute[]): {
        added: Attribute[];
        removed: Attribute[];
        modified: Attribute[];
    } {
        return this.get_collection_difference<Attribute>(attribute_to_compare, this.get_attribute());
    }
}
