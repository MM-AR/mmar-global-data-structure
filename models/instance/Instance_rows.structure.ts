import { Type } from "class-transformer";
import { AttributeInstance } from "./Instance_attributes.structure";

export { InstanceRowStructure };

class InstanceRowStructure {
  @Type(() => AttributeInstance)
  public table_row_attributes: AttributeInstance[];
  @Type(() => Number) public table_row: number;
  @Type(() => Number) public height: number;
  @Type(() => String) public comment: string;

  constructor(
    table_row_attributes: AttributeInstance[],
    table_row: number,
    height?: number,
    comment?: string
  ) {
    this.table_row_attributes = table_row_attributes;
    this.table_row = table_row;
    if (height) {
      this.height = height;
    }
    if (comment) {
      this.comment = comment;
    }
  }

  get_table_row_attributes() {
    return this.table_row_attributes;
  }
  get_table_row() {
    return this.table_row;
  }
  get_height() {
    return this.height;
  }
  get_comment() {
    return this.comment;
  }

  set_table_row_attributes(at: AttributeInstance[]) {
    this.table_row_attributes = at;
  }
  set_table_row(table_row: number) {
    this.table_row = table_row;
  }
  set_height(height: number) {
    this.height = height;
  }
  set_comment(comment: string) {
    this.comment = comment;
  }

  add_table_row_attributes(at: AttributeInstance) {
    this.table_row_attributes.push(at);
  }

  remove_table_attribute_reference(at: AttributeInstance) {
    this.table_row_attributes.splice(this.table_row_attributes.indexOf(at), 1);
  }
}
