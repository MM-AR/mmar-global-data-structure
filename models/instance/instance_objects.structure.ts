import {Point2D, Point3D, Quaternion, UUID} from "../meta/Metamodel_metaobjects.structure";
import {Expose, plainToInstance, Transform, Type} from "class-transformer";

export class ObjectInstance {
    @Type(() => String) public uuid: UUID;
    @Type(() => String) public name: string;
    @Type(() => String) public description: string;

    @Type(() => Function)
    // eslint-disable-next-line @typescript-eslint/ban-types
    public geometry: Function;

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

    @Type(() => Boolean)
    public visibility: boolean;

    @Type(() => Object)
    @Transform(
        ({value}) => (typeof value == "string" ? JSON.parse(value) : value),
        {toClassOnly: true}
    ) //convert the plain text to proper json
    public custom_variables: {};

    constructor(
        uuid: UUID,
        name?: string,
        description?: string,
        geometry?: Function,
        coordinates_2d?: Point2D,
        relative_coordinate_3d?: Point3D,
        absolute_coordinate_3d?: Point3D,
        rotation?: Quaternion,
        visibility?: boolean,
        custom_variables?: {}
    ) {
        this.uuid = uuid;
        if (name) {
            this.name = name;
        }
        if (geometry) {
            this.geometry = geometry;
        }
        if (coordinates_2d) {
            this.coordinates_2d = coordinates_2d;
        } else {
            this.coordinates_2d = {x: 0, y: 0, z: 0};
        }

        if (relative_coordinate_3d) {
            this.relative_coordinate_3d = relative_coordinate_3d;
        } else {
            this.relative_coordinate_3d = {x: 0, y: 0, z: 0};
        }

        if (absolute_coordinate_3d) {
            this.absolute_coordinate_3d = absolute_coordinate_3d;
        }

        if (rotation) {
            this.rotation = rotation;
        } else {
            this.rotation = {x: 0, y: 0, z: 0, w: 1};
        }

        if (visibility) {
            this.visibility = visibility;
        }
        if (description) {
            this.description = description;
        }
        if (custom_variables) {
            this.custom_variables = custom_variables;
        } else {
            this.custom_variables = {};
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

    get_name(): string {
        return this.name;
    }

    set_name(name: string) {
        this.name = name;
    }

    get_description(): string {
        return this.description;
    }

    set_description(description: string) {
        this.description = description;
    }

    get_geometry(): Function {
        return this.geometry;
    }

    set_geometry(geometry: Function) {
        this.geometry = geometry;
    }

    get_coordinates_2d(): Point2D {
        return this.coordinates_2d;
    }

    set_coordinates_2d(coordinates_2d: Point2D) {
        this.coordinates_2d = coordinates_2d;
    }

    get_relative_coordinate_3d(): Point3D {
        return this.relative_coordinate_3d;
    }

    get_rotation(): Quaternion {
        return this.rotation;
    }

    set_relative_coordinate_3d(relative_coordinate_3d: Point3D) {
        this.relative_coordinate_3d = relative_coordinate_3d;
    }

    get_absolute_coordinate_3d(): Point3D {
        return this.absolute_coordinate_3d;
    }

    set_absolute_coordinate_3d(absolute_coordinate_3d: Point3D) {
        this.absolute_coordinate_3d = absolute_coordinate_3d;
    }

    set_rotation(rotation: Quaternion) {
        this.rotation = rotation;
    }

    get_visibility(): boolean {
        return this.visibility;
    }

    set_visibility(visibility: boolean) {
        this.visibility = visibility;
    }

    get_custom_variables(): {} {
        return this.custom_variables;
    }

    set_custom_variables(custom_variables: {}) {
        this.custom_variables = custom_variables;
    }

    set_allAttributsObject(object: ObjectInstance) {
        this.name = object.name;
        this.description = object.description;
        this.geometry = object.geometry;
        this.coordinates_2d = object.coordinates_2d;
        this.absolute_coordinate_3d = object.absolute_coordinate_3d;
        this.relative_coordinate_3d = object.relative_coordinate_3d;
        this.visibility = object.visibility;
        this.custom_variables = object.custom_variables;
        this.rotation = object.rotation;
    }


    get_collection_difference<T extends ObjectInstance>(collection_to_compare: T[], current_collection: T[]):
        {
            added: T[];
            removed: T[];
            modified: T[];
        } {
        const added: T[] = [];
        const removed: T[] = [];
        const modified: T[] = [];

        if (!current_collection) {
            console.warn("Current collection is empty");
            return {added: collection_to_compare, removed: [], modified: []};
        }

        if (!collection_to_compare) {
            console.warn("Collection to compare is empty");
            return {
                added: [], removed: current_collection, modified: []
            };
        }

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

    // eslint-disable-next-line @typescript-eslint/ban-types
    set_allAttributs(
        name: string,
        description: string,
        geometry: Function,
        coordinates_2d: Point2D,
        relative_coordinate_3d: Point3D,
        absolute_coordinate_3d: Point3D,
        visibility: boolean,
        custom_variables: {},
        rotation: Quaternion
    ) {
        this.name = name;
        this.description = description;
        this.geometry = geometry;
        this.coordinates_2d = coordinates_2d;
        this.absolute_coordinate_3d = absolute_coordinate_3d;
        this.relative_coordinate_3d = relative_coordinate_3d;
        this.visibility = visibility;
        this.custom_variables = custom_variables;
        this.rotation = rotation;
    }

    convertValues(
        coordinates_2d: string,
        relative_coordinate_3d: string,
        absolute_coordinate_3d: string,
        custom_variables: string,
        rotation: string
    ) {
        this.coordinates_2d = JSON.parse(coordinates_2d);
        this.relative_coordinate_3d = JSON.parse(relative_coordinate_3d);
        this.absolute_coordinate_3d = JSON.parse(absolute_coordinate_3d);
        this.custom_variables = JSON.parse(custom_variables);
        this.rotation = JSON.parse(rotation);
    }
}
