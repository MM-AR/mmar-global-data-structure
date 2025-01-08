import {MetaObject, UUID} from "./Metamodel_metaobjects.structure";
import {Class} from "./Metamodel_classes.structure";
import {Relationclass} from "./Metamodel_relationclasses.structure";
import {Attribute} from "./Metamodel_attributes.structure";
import {Port} from "./Metamodel_ports.structure";
import {Type} from "class-transformer";

export {SceneType};

class SceneType extends MetaObject {
    @Type(() => Class) public classes: Class[];
    @Type(() => Relationclass) public relationclasses: Relationclass[];
    @Type(() => Attribute) public attributes: Attribute[];
    @Type(() => Port) public ports: Port[];

    //fully specified or minimal
    constructor(
        uuid: UUID,
        name: string,
        c?: Class[],
        rc?: Relationclass[],
        a?: Attribute[],
        p?: Port[]
    ) {
        super(uuid, name);
        if (c) {
            this.set_class(c);
        } else {
            this.classes = [];
        }
        if (rc) {
            this.set_relationclass(rc);
        } else {
            this.relationclasses = [];
        }
        if (a) {
            this.set_attribute(a);
        } else {
            this.attributes = [];
        }
        if (p) {
            this.set_port(p);
        } else {
            this.ports = [];
        }
    }

    add_class(c: Class) {
        this.classes.push(c);
    }

    set_class(c: Class[]) {
        this.classes = c;
    }

    get_class() {
        return this.classes;
    }

    add_relationclass(rc: Relationclass) {
        this.relationclasses.push(rc);
    }

    remove_class(uuid: UUID) {
        this.classes = this.classes.filter((c) => c.get_uuid() !== uuid);
    }

    set_relationclass(rc: Relationclass[]) {
        this.relationclasses = rc;
    }

    get_relationclass() {
        return this.relationclasses;
    }

    remove_relationclass(uuid: UUID) {
        this.relationclasses = this.relationclasses.filter(
            (rc) => rc.get_uuid() !== uuid
        );
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

    add_port(p: Port) {
        this.ports.push(p);
    }

    remove_port(uuid: UUID) {
        this.ports = this.ports.filter((p) => p.get_uuid() !== uuid);
    }

    set_port(p: Port[]) {
        this.ports = p;
    }

    get_port() {
        return this.ports;
    }

    get_attributes_difference(attribute_to_compare: Attribute[]): {
        added: Attribute[];
        removed: Attribute[];
        modified: Attribute[];
    } {
        return this.get_collection_difference<Attribute>(attribute_to_compare, this.get_attribute());
    }

    get_classes_difference(class_to_compare: Class[]): {
        added: Class[];
        removed: Class[];
        modified: Class[];
    } {
        return this.get_collection_difference<Class>(class_to_compare, this.get_class());
    }

    get_relationclasses_difference(relationclass_to_compare: Relationclass[]): {
        added: Relationclass[];
        removed: Relationclass[];
        modified: Relationclass[];
    } {
        return this.get_collection_difference<Relationclass>(relationclass_to_compare, this.get_relationclass());
    }

    get_ports_difference(ports_to_compare: Port[]): {
        added: Port[];
        removed: Port[];
        modified: Port[];
    } {
        return this.get_collection_difference<Port>(ports_to_compare, this.get_port());
    }

    set_allArrays(
        c?: Class[],
        rc?: Relationclass[],
        a?: Attribute[],
        p?: Port[]
    ) {
        if (c) {
            this.set_class(c);
        }
        if (rc) {
            this.set_relationclass(rc);
        }
        if (a) {
            this.set_attribute(a);
        }
        if (p) {
            this.set_port(p);
        }
    }
}
