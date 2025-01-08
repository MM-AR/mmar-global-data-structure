import { UUID } from "./Metamodel_metaobjects.structure";
import { Class } from "./Metamodel_classes.structure";
import { Relationclass } from "./Metamodel_relationclasses.structure";
import { SceneType } from "./Metamodel_scenetypes.structure";
import { plainToInstance, Type } from "class-transformer";

export { Metamodel };

class Metamodel {
  @Type(() => SceneType) public sceneTypes: SceneType[];
  @Type(() => Class) public classes: Class[];
  @Type(() => Relationclass) public relationclasses: Relationclass[];

  constructor() {
    this.sceneTypes = [];
    this.classes = [];
    this.relationclasses = [];
  }

  static fromJS(resultData: any) {
    return plainToInstance(this, resultData);
  }

  add_sceneType(st: SceneType) {
    this.sceneTypes.push(st);
  }

  set_sceneType(st: SceneType[]) {
    this.sceneTypes = st;
  }

  get_sceneTypes() {
    return this.sceneTypes;
  }

  get_sceneType(uuid: UUID) {
    for (const st of this.sceneTypes) {
      if (st.uuid == uuid) {
        return st;
      }
    }
  }

  add_class(c: Class) {
    this.classes.push(c);
  }

  set_class(c: Class[]) {
    this.classes = c;
  }

  get_class(uuid: UUID) {
    for (const c of this.classes) {
      if (c.uuid == uuid) {
        return c;
      }
    }
  }

  add_relationclass(rc: Relationclass) {
    this.relationclasses.push(rc);
  }

  set_relationclass(rc: Relationclass[]) {
    this.relationclasses = rc;
  }

  get_relationclass(uuid: UUID) {
    for (const rc of this.relationclasses) {
      if (rc.uuid == uuid) {
        return rc;
      }
    }
  }
}
