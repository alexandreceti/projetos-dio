function validaArray(arr, num) {
  try {
    if (!arr && !num)
      throw new ReferenceError("Envio os parametros");
    if (typeof (arr) !== 'object')
      throw new TypeError("Array precisa ser do tipo obj")
    if (typeof (num) !== 'number')
      throw new TypeError("num precisa ser do tipo number")

    if (arr.length !== num) throw new RangeError("tamanho invalido");

    return arr;
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log("Este erro e um reference Erro");
      console.log(e.message);
    } else if (e instanceof TypeError) {
      console.log("Este erro e um de Tipo");
      console.log(e.message);
    } else if (e instanceof RangeError) {
      console.log("Este erro e um de tamanho");
      console.log(e.message);
    } else {
      console.log("Este erro e inesperado.");
      console.log(e.message);
    }
  }
}

console.log(validaArray([1, 2, 3], "string"));