function sumarCadena(cadena)
{
    let file= cadena.split("\n");
    file.pop();
    if(file.length === 0)
    {
        let initialValue=0;
        let cad = cadena.split(/[,-]+/);
        let tot = cad.reduce(
        (previousValue, currentValue) => parseInt(previousValue) + parseInt(currentValue),initialValue);
        return tot;
    }
    else
    {
        let Delimitador= cadena.split("\n");
        let CadAux=Delimitador.pop();
        let CadenaAux=CadAux.toString();
        let lim = Delimitador.toString();
        for(let i=0;i<lim.length;i++)
        {
            lim=lim.replace('/','');
            lim=lim.replace(']','');
            lim=lim.replace('[','');
        }
        let initialValue=0;
        let aux= CadenaAux.replace(lim,'-');
        let cad = aux.split(/[,-]+/);
        let tot = cad.reduce(
        (previousValue, currentValue) => parseInt(previousValue) + parseInt(currentValue),initialValue);
        return tot;
    }
};

export default sumarCadena;