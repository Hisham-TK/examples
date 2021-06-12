export type valueCheckObj = { value: unknown; message: string };

export abstract class CustomAssertions {
  static argsNullOrEmptyAssertion(args: { [key: string]: unknown }): void {
    for (const key in args) {
      if (Object.prototype.hasOwnProperty.call(args, key)) {
        const keyValue = args[key];
        if (!keyValue) {
          alert(`"${key}" cannot be empty or null`);
        }
      }
    }
  }

  static valuesNullOrEmptyAssertion(
    values: valueCheckObj | valueCheckObj[]
  ): void {
    if (!Array.isArray(values)) {
      return checkObj(values);
    }
    for (const obj of values) {
      checkObj(obj);
    }
  }
}

function checkObj(obj: valueCheckObj): void {
  if (!obj.value) {
    throw alert(obj.message);
  }
}
