import { MetaObject, UUID } from "./Metamodel_metaobjects.structure";
import { AttributeType } from "./Metamodel_attributetypes.structure";
import { Type } from "class-transformer";

export { Attribute };

class Attribute extends MetaObject {
  @Type(() => Boolean) public multi_valued: boolean;
  @Type(() => String) public default_value: string;
  @Type(() => AttributeType) public attribute_type: AttributeType;
  @Type(() => Number) public sequence: number;
  @Type(() => String) public ui_component: string;
  @Type(() => String) public facets: string;
  @Type(() => Number) public min: number;
    @Type(() => Number) public max: number;

  constructor(
    uuid: UUID,
    name: string,
    multi_valued: boolean=false,
    default_value: string,
    at?: AttributeType,
    sequence?: number,
    ui_component?: string,
    facets?: string,
    min?: number,
    max?: number

  ) {
    super(uuid, name);
    this.multi_valued = multi_valued;
    if (at) {
      this.set_attribute_type(at);
    }

    if (sequence) {
        this.set_sequence(sequence);
    }

    if (ui_component) {
        this.set_ui_component(ui_component);
    }
    if (facets) {
        this.set_facets(facets);
    }

    this.default_value = default_value;

    if (min) {
        this.set_min(min);
    }
    if (max) {
        this.set_max(max);
    }
  }
  set_attribute_type(at: AttributeType) {
    this.attribute_type = at;
  }
  get_attribute_type() {
    return this.attribute_type;
  }
  get_multi_valued() {
    return this.multi_valued;
  }
  set_multi_valued(multi_valued: boolean) {
    this.multi_valued = multi_valued;
  }
  get_sequence() {
      return this.sequence;
  }
  set_sequence(sequence: number) {
      this.sequence = sequence;
  }
  get_ui_component() {
      return this.ui_component;
  }
  set_ui_component(ui_component: string) {
      this.ui_component = ui_component;
  }
  get_facets() {
      return this.facets;
  }
  set_facets(facets: string) {
      this.facets = facets;
  }

  get_default_value() {
    return this.default_value;
  }
  set_default_value(default_value: string) {
    this.default_value = default_value;
  }

    get_min() {
        return this.min;
    }
    set_min(min: number) {
        this.min = min;
    }
    get_max() {
        return this.max;
    }
    set_max(max: number) {
        this.max = max;
    }

}
