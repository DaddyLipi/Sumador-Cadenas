import sumarCadena from './CCadenas.js'

describe("Suma de la cadena", () => {
    it("1", () => {
      expect(sumarCadena(1)).toEqual(1);
    });
    it("2", () => {
      expect(sumarCadena("2")).toEqual(2);
    });
  });