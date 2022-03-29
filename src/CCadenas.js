function sumarCadena(cadena)
{
    let initialValue=0;
    let cad = cadena.split(',').map(function(item) {
        return parseInt(item);
    });
    //let tot = cad.reduce(
    //(previousValue, currentValue) => parseInt(previousValue) + parseInt(currentValue),initialValue);
    return cad;
};

export default sumarCadena;