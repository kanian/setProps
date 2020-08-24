import { PartialOfProperties } from "./utils/PartialOfProperties";

export class BaseObject {
  /**
   *
   * @param values set of values with which to update the instance
   */
  setProps<T extends BaseObject>(values: PartialOfProperties<T>): void {
    for (let prop in values) {
      this[prop] =
        values[prop] !== undefined ? values[prop] : this[prop];
    }
  }
}
