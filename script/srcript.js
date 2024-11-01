/**Método Map:  

3.50, 45, 8.55, 21.99*/

var arregloPrecios=[3,45,8.55,21.99]
var a=document.getElementById('pDos')
a.innerHTML=arregloPrecios.join(' ')

function aplicarAumento(){
    var PrecioConIva=arregloPrecios.map((precioNuevo)=>(precioNuevo*1.21).toFixed(2))
    var b=document.getElementById('pResuktadoMap')
    b.innerHTML=PrecioConIva.join(' ')
}
/**Método Filter: */
var arregloAFil=[2,3,4,5,6,7,8,9,10,11,12]
var aFiltrar=document.getElementById('pDosFil')
aFiltrar.innerHTML=arregloAFil.join(' ')

function filtrar(){
    var datosFiltrados=arregloAFil.filter((elemAFil)=>elemAFil >= 7 && elemAFil <=10)
    var dF=document.getElementById('pResultadoFilter')
    dF.innerHTML=datosFiltrados.join(' ')
}

/**Método reduce: */
/**const array1 = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10
 */
var Arregloprecios1=[10,20,30,40]
var imp=document.getElementById('pDosReduce')
imp.innerHTML=Arregloprecios1.join(' ')
function reduce(){
  //  const valorInicial=0;
    const suma=Arregloprecios1.reduce((a,b)=>a+b)
    var sum=document.getElementById('pResultadoReduce')
    sum.innerHTML=suma  
}
 