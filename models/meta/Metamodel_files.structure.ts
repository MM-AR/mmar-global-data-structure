import { MetaObject, UUID } from "./Metamodel_metaobjects.structure";
import { Type } from "class-transformer";
export { File };

class File extends MetaObject {
    @Type(() => Buffer) public data: Buffer;
    @Type(() => String) public type: string;

    constructor(uuid: UUID, name: string, data: Buffer, type: string) {
        super(uuid, name);
        this.data = data;
        this.type = type;
    }
    get_data() {
        return this.data;
    }
    set_data(data: Buffer) {
        this.data = data;
    }
    get_type() {
        return this.type;
    }
    set_type(type: string) {
        this.type = type;
    }
}
