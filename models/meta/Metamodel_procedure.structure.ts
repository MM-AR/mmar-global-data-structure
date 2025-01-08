import { MetaObject, UUID } from "./Metamodel_metaobjects.structure";
import { Type } from "class-transformer";

export { Procedure };
class Procedure extends MetaObject {
  @Type(() => String) public definition: string;
  constructor(uuid: UUID, name: string, definition: string) {
    super(uuid, name);
    this.definition = definition;
  }

  get_definition() {
    return this.definition;
  }

  set_definition(definition: string) {
    this.definition = definition;
  }
}
