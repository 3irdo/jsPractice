// este es el código del cuadrado
console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado (lado) {
    return lado * 4
}
// console.log("El perímetro del cuadrado es:" + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado
}
// console.log("El perímetro del cuadrado es:" + areaCuadrado + "cm^2");

console.groupEnd();


// código del triángulo
console.group("Triángulos");

const ladoTriangulo1 = 6;

const ladoTriangulo2 = 6;

const baseTriangulo = 4;
    console.log(
    "Los lados de mi triángulo miden: " 
    + ladoTriangulo1 
    + "cm, " 
    + ladoTriangulo2 
    + "cm y " 
    + baseTriangulo 
    + "cm"
);


const alturaTriangulo = 5.5;
console.log("La altura del triángulo es: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, ladoBase){
    return lado1 + lado2 + ladoBase
} 


function areaTriangulo(base, altura){
    return (base * altura) / 2
}



// código del círculo

console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("el radio del círculo es: " + radioCirculo + "cm");

//  Diámetro
function diametroCirculo(radio){
    return radio * 2
}

// const diametroCirculo = radioCirculo * 2;
// console.log("el diámetro del círculo es: " + diametroCirculo + "cm");
//  Pi
const PI = Math.PI; 
console.log("PI es: " + PI)

// Circunferencia

function perimetroCirculo(){
    const diametro = diametroCirculo(radio); 
    return diametro * PI
}
// const perimetroCirculo = diametroCirculo * PI;
// console.log("el perímetro del círculo es: " + diametroCirculo + "cm");

//  Área

function areaCirculo(radio){
    return (radio * radio) * PI
}

// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log("el área del círculo es: " + areaCirculo + "cm^2");

console.groupEnd();


// conexión con html

function calculaPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

// Área Cuadrado

function calculaAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}



function alturaTrianguloIso (lado1, lado2,  base,) {
    if(lado1 === lado2 != base){
        const altura = Math.sqrt(lado1 **2 - (base **2/ 2) );
        return altura
    }
    else{ 
        alert("Para calcular un triágulo Isósceles los lados deben ser iguales.");
    }
}

function calculaAlturaTrianguloIso(){
    const input = document.getElementById("inputIsoLado1");
    const value = input.value;
    
    const alturaIso = alturaTrianguloIso(value);
    alert(alturaIso);
}