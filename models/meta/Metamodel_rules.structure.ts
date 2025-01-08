import { Expose, plainToInstance, Type } from "class-transformer";
import { UUID } from "./Metamodel_metaobjects.structure";


export class Rule {
    @Type(() => String)
    public uuid: UUID;

    @Type(() => String)
    public name: string;

    @Type(() => String)
    // eslint-disable-next-line @typescript-eslint/ban-types
    public value: string;

    @Type(() => String)
    // eslint-disable-next-line @typescript-eslint/ban-types
    public assigned_uuid_metaobject: UUID;

    // eslint-disable-next-line @typescript-eslint/ban-types
    constructor(uuid: UUID, name: string, assigned_uuid_metaobject: UUID, value?: string) {
        this.uuid = uuid;
        this.name = name;
        this.assigned_uuid_metaobject = assigned_uuid_metaobject;
        if (value) { this.set_value(value); }

    }

    get_UUID() {
        return this.uuid;
    }

    // eslint-disable-next-line @typescript-eslint/ban-types
    set_value(value: string) {
        this.value = value;
    }


    @Expose()
    static fromJS(returnObject: unknown) {
        return plainToInstance(this, returnObject)
    }

}
