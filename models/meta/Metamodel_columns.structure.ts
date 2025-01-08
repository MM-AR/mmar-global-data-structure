import { Type } from "class-transformer";
import { Attribute } from "./Metamodel_attributes.structure";

export { ColumnStructure };

/**
 * @description - The column structure of a table, this is an helper class to link an attribute to an attribute type (hast_table_attribute in the database).
 * @class - ColumnStructure
 * @export - The class is exported so that it can be used by other files.
 */
class ColumnStructure {
  @Type(() => Attribute) public attribute: Attribute;
  @Type(() => Number) public sequence: number;
  @Type(() => Number) public width: number;
  @Type(() => String) public comment: string;

  constructor(
    attribute: Attribute,
    sequence: number,
    width?: number,
    comment?: string
  ) {
    this.attribute = attribute;
    this.sequence = sequence;
    if (width) {
      this.width = width;
    }
    if (comment) {
      this.comment = comment;
    }
  }

  get_attribute() {
    return this.attribute;
  }
  get_sequence() {
    return this.sequence;
  }
  get_width() {
    return this.width;
  }
  get_comment() {
    return this.comment;
  }

  set_attribute(at: Attribute) {
    this.attribute = at;
  }
  set_sequence(sequence: number) {
    this.sequence = sequence;
  }
  set_width(width: number) {
    this.width = width;
  }
  set_comment(comment: string) {
    this.comment = comment;
  }
}
