import sumarCadena from './CCadenas.js'

describe("Suma de la cadena", () => {
    it("1", () => {
      expect(sumarCadena(1)).toEqual(1);
    });
    it("2", () => {
      expect(sumarCadena("2")).toEqual(2);
    });
    it("3", () => {
      expect(sumarCadena("1,2")).toEqual(["1","2"]);
    });
    it("4", () => {
      expect(sumarCadena("1,2")).toEqual([1,2]);
    });
  });