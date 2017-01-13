export function onSnakDataValueChange( snakKey, datavalue ) {
  return {
    type: "onSnakDataValueChange",
    snakKey: snakKey,
    datavalue: datavalue
  }
}
