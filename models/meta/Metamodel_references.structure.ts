import { UUID } from "./Metamodel_metaobjects.structure";
import { Type } from "class-transformer";

export {
  ClassReference,
  RelationClassReference,
  PortReference,
  SceneTypeReference,
  AttributeReference,
};

class ClassReference {
  @Type(() => String) public uuid: UUID;
  @Type(() => Number) public min: number;
  @Type(() => Number) public max: number;

  constructor(uuid: UUID, min: number, max: number) {
    this.uuid = uuid;
    this.min = min;
    this.max = max;
  }

  get_uuid() {
    return this.uuid;
  }

  get_min() {
    return this.min;
  }

  get_max() {
    return this.max;
  }

  set_uuid(uuid: UUID) {
    this.uuid = uuid;
  }

  set_min(min: number) {
    this.min = min;
  }

  set_max(max: number) {
    this.max = max;
  }
}
class RelationClassReference {
  @Type(() => String) public uuid: UUID;
  @Type(() => Number) public min: number;
  @Type(() => Number) public max: number;

  constructor(uuid: UUID, min: number, max: number) {
    this.uuid = uuid;
    this.min = min;
    this.max = max;
  }

  get_uuid() {
    return this.uuid;
  }

  get_min() {
    return this.min;
  }

  get_max() {
    return this.max;
  }

  set_uuid(uuid: UUID) {
    this.uuid = uuid;
  }

  set_min(min: number) {
    this.min = min;
  }

  set_max(max: number) {
    this.max = max;
  }
}
class SceneTypeReference {
  @Type(() => String) public uuid: UUID;
  @Type(() => Number) public min: number;
  @Type(() => Number) public max: number;

  constructor(uuid: UUID, min: number, max: number) {
    this.uuid = uuid;
    this.min = min;
    this.max = max;
  }

  get_uuid() {
    return this.uuid;
  }

  get_min() {
    return this.min;
  }

  get_max() {
    return this.max;
  }

  set_uuid(uuid: UUID) {
    this.uuid = uuid;
  }

  set_min(min: number) {
    this.min = min;
  }

  set_max(max: number) {
    this.max = max;
  }
}
class PortReference {
  @Type(() => String) public uuid: UUID;
  @Type(() => Number) public min: number;
  @Type(() => Number) public max: number;

  constructor(uuid: UUID, min: number, max: number) {
    this.uuid = uuid;
    this.min = min;
    this.max = max;
  }

  get_uuid() {
    return this.uuid;
  }

  get_min() {
    return this.min;
  }

  get_max() {
    return this.max;
  }

  set_uuid(uuid: UUID) {
    this.uuid = uuid;
  }

  set_min(min: number) {
    this.min = min;
  }

  set_max(max: number) {
    this.max = max;
  }
}

class AttributeReference {
  @Type(() => String) public uuid: UUID;
  @Type(() => Number) public min: number;
  @Type(() => Number) public max: number;

  constructor(uuid: UUID, min: number, max: number) {
    this.uuid = uuid;
    this.min = min;
    this.max = max;
  }

  get_uuid() {
    return this.uuid;
  }

  get_min() {
    return this.min;
  }

  get_max() {
    return this.max;
  }

  set_uuid(uuid: UUID) {
    this.uuid = uuid;
  }

  set_min(min: number) {
    this.min = min;
  }

  set_max(max: number) {
    this.max = max;
  }
}
