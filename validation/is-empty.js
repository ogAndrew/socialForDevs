const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);

module.exports = isEmpty;

//this is a custom-built validation function to check if a value is undefined, null, empty-object, or
// empty-string.


