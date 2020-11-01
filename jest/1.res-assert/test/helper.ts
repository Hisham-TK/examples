export interface LiteralObject {
  [key: string]: unknown;
}

export function resAssert({ res, assert }: { res: unknown; assert: { body: unknown; status?: number } }): void {
  const flattenKeys = flattenObject(assert);
  if (res)
    for (const rawField in flattenKeys)
      if (Object.hasOwnProperty.call(flattenKeys, rawField)) {
        const dataTypeOrValue = flattenKeys[rawField];
        const extractedFields = /(.+)\.(.+)/.exec(rawField);
        const [parentFields, field] = extractedFields ? [extractedFields[1], extractedFields[2]] : ['', rawField];
        expect(eval('res' + indexedPath(parentFields))).toHaveProperty(field);
        const fieldValue = eval('res' + indexedPath(rawField.replace(/\.\d+$/, '')));
        const isArrayAssertions = Array.isArray(fieldValue) && /\.\d+$/.test(rawField);
        if (typeof dataTypeOrValue === 'string' && ['boolean', 'string', 'number'].indexOf(dataTypeOrValue) + 1)
          expect(isArrayAssertions ? typeof fieldValue[0] : typeof fieldValue).toBe(dataTypeOrValue);
        else
          expect(fieldValue)[dataTypeOrValue instanceof RegExp ? 'toMatch' : 'toEqual'](
            isArrayAssertions ? expect.arrayContaining([dataTypeOrValue]) : dataTypeOrValue,
          );
      }
}

// Helpers
function flattenObject(obj: LiteralObject, prefix = '') {
  return Object.keys(obj).reduce((acc: LiteralObject, k) => {
    const pre = prefix.length ? prefix + '.' : '';
    if (typeof obj[k] === 'object') Object.assign(acc, flattenObject(obj[k], pre + k));
    else acc[pre + k] = obj[k];
    return acc;
  }, {});
}
const indexedPath = (key: string) => (key ? ('["' + key.split('.').join('"]["') + '"]').replace(/"(\d+)"/g, '$1') : '');
