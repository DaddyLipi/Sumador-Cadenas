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
    it("5",()=>{
      expect(sumarCadena("1,2")).toEqual(3);
    });
    it("6",()=>{
      expect(sumarCadena("1,2------3,4")).toEqual(10);
    });
    it("7",()=>{
      expect(sumarCadena("//[*]\n1,2*3*4")).toEqual(10);
    });
    it("8",()=>{
      expect(sumarCadena("//[***]\n1***2***3")).toEqual(6);
    });
  });