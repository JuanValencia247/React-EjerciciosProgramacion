export const Ejercicio1 = () => {

    // var numero = 5;
    return (
        <div className="container">
            <h3 className="container__solution">Solucion:</h3>
            <code>
                <span>var numero = 5</span>
                <br />
                <span>console.log(numero);</span>
            </code>
        </div>
    )
}
export const Ejercicio2 = (a, b) => {
    // function suma (a,b){
    //     let res = a + b;
    //     return res;
    // }
    // console.log(suma(2, 5));

    let res = 2 + 3
    return (
        <div className="container">
            <h3 className="container__solution">Solucion:</h3>
            <code>
                <span>{'fuction suma (a, b){'}</span><br />
                <span>&nbsp;&nbsp;let resultado = a + b;</span><br />
                <span>&nbsp;&nbsp;return resultado;</span><br />
                <span>{'}'}</span><br /><br />
                <span>console.log(suma);</span>
            </code>
        </div>
    )
}