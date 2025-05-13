import {Expose, plainToInstance, Transform, Type} from "class-transformer";

export type UUID = string;

//export type Point2D = {x:number, y:number, z:number};

export class Point2D {
    @Type(() => Number)
    x: number;
    @Type(() => Number)
    y: number;
    @Type(() => Number)
    z: number;
}

export class Point3D {
    @Type(() => Number)
    x: number;
    @Type(() => Number)
    y: number;
    @Type(() => Number)
    z: number;
}

export class Quaternion {
    @Type(() => Number)
    x: number;
    @Type(() => Number)
    y: number;
    @Type(() => Number)
    z: number;
    @Type(() => Number)
    w: number;
}

//export type Point3D = {x:number, y:number, z:number};

class MetaObject {
    @Type(() => String) public uuid: UUID;
    @Type(() => String) public name: string;

    @Type(() => Function)
    // eslint-disable-next-line @typescript-eslint/ban-types
    public geometry: Function;

    @Type(() => String)
    public description: string;

    @Type(() => Point2D)
    @Transform(
        ({value}) => (typeof value == "string" ? JSON.parse(value) : value),
        {toClassOnly: true}
    ) //convert the plain text to proper json
    public coordinates_2d: Point2D;

    @Type(() => Point3D)
    @Transform(
        ({value}) => (typeof value == "string" ? JSON.parse(value) : value),
        {toClassOnly: true}
    ) //convert the plain text to proper json
    public relative_coordinate_3d: Point3D;

    @Type(() => Point3D)
    @Transform(
        ({value}) => (typeof value == "string" ? JSON.parse(value) : value),
        {toClassOnly: true}
    ) //convert the plain text to proper json
    public absolute_coordinate_3d: Point3D;

    @Type(() => Quaternion)
    @Transform(
        ({value}) => (typeof value == "string" ? JSON.parse(value) : value),
        {toClassOnly: true}
    ) //convert the plain text to proper json
    public rotation: Quaternion;

    // eslint-disable-next-line @typescript-eslint/ban-types
    constructor(
        uuid: UUID,
        name: string,
        description?: string,
        // eslint-disable-next-line @typescript-eslint/ban-types
        geometry?: Function,
        coordinates_2d?: Point3D,
        relative_coordinate_3d?: Point3D,
        absolute_coordinate_3d?: Point3D,
        rotation?: Quaternion
    ) {
        this.uuid = uuid;
        this.name = name;
        if (geometry) {
            this.set_geometry(geometry);
        }else {
            const defaultGeometry = 'async function vizRep(gc) {\n  let icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAAADMElEQVR4nOzVwQnAIBQFQYXff81RUkQCOyDj1YOPnbXWPmeTRef+/3O/OyBjzh3CD95BfqICMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMO0TAAD//2Anhf4QtqobAAAAAElFTkSuQmCC";\n  gc.graphic_cube(1, 1, 1, "grey");\n}'
            this.set_geometry(defaultGeometry as unknown as Function)
        }
        if (description) {
            this.set_description(description);
        }
        if (coordinates_2d) {
            this.set_coordinates_2d(coordinates_2d);
        }
        if (relative_coordinate_3d) {
            this.set_relative_coordinate_3d(relative_coordinate_3d);
        }
        if (absolute_coordinate_3d) {
            this.set_absolute_coordinate_3d(absolute_coordinate_3d);
        }
        if (rotation) {
            this.set_rotation(rotation);
        } else {
            this.set_rotation({x: 0, y: 0, z: 0, w: 1});
        }
    }

    @Expose()
    static fromJS(returnObject: unknown) {
        return plainToInstance(this, returnObject);
    }

    get_uuid(): UUID {
        return this.uuid;
    }

    set_uuid(uuid: UUID) {
        this.uuid = uuid;
    }

    set_name(name: string) {
        this.name = name;
    }

    get_name(): string {
        return this.name;
    }

    // eslint-disable-next-line @typescript-eslint/ban-types
    set_geometry(geometry: Function) {
        this.geometry = geometry;
    }

    set_description(description: string) {
        this.description = description;
    }

    set_coordinates_2d(coordinates_2d: Point3D) {
        this.coordinates_2d = coordinates_2d;
    }

    set_relative_coordinate_3d(relative_coordinate_3d: Point3D) {
        this.relative_coordinate_3d = relative_coordinate_3d;
    }

    set_absolute_coordinate_3d(absolute_coordinate_3d: Point3D) {
        this.absolute_coordinate_3d = absolute_coordinate_3d;
    }

    set_rotation(rotation: Quaternion) {
        this.rotation = rotation;
    }

    // eslint-disable-next-line @typescript-eslint/ban-types
    set_allAttributes(
        description: string,
        geometry: any,
        coordinates_2d: Point3D,
        relative_coordinate_3d: Point3D,
        absolute_coordinate_3d: Point3D,
        rotation: Quaternion
    ) {
        this.set_geometry(geometry);
        this.set_description(description);
        this.set_coordinates_2d(coordinates_2d);
        this.set_relative_coordinate_3d(relative_coordinate_3d);
        this.set_absolute_coordinate_3d(absolute_coordinate_3d);
        this.set_rotation(rotation);
    }

    set_allAttributes_obj(object: MetaObject) {
        this.set_geometry(object.geometry);
        this.set_description(object.description);
        this.set_coordinates_2d(object.coordinates_2d);
        this.set_relative_coordinate_3d(object.relative_coordinate_3d);
        this.set_absolute_coordinate_3d(object.absolute_coordinate_3d);
        this.set_rotation(object.rotation);
    }

    get_collection_difference<T extends MetaObject>(collection_to_compare: T[], current_collection: T[]):
        {
            added: T[];
            removed: T[];
            modified: T[];
        } {
        const added: T[] = [];
        const removed: T[] = [];
        const modified: T[] = [];

        if (typeof collection_to_compare === "undefined") return {added, removed, modified};

        const current_T_uuids = current_collection.map((a) => a.get_uuid());
        const T_to_compare_uuids = collection_to_compare.map((a) => a.get_uuid());

        // Identify removed and modified attributes in one loop
        for (const T of current_collection) {
            const uuid = T.get_uuid();
            if (!T_to_compare_uuids.includes(uuid)) {
                removed.push(T);
            } else {
                const modified_T = collection_to_compare.find((a) => a.get_uuid() === uuid);
                if (modified_T) modified.push(modified_T);
            }
        }

        // Identify added attributes
        for (const T of collection_to_compare) {
            const uuid = T.get_uuid();
            if (!current_T_uuids.includes(uuid)) {
                added.push(T);
            }
        }

        return {added, removed, modified};
    }
}

export {MetaObject};
