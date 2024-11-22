elementsH2 = document.getElementsByTagName("h2");
elementsP = document.getElementsByTagName("p");
elementsIMG = document.getElementsByTagName("img");
let listaPalabras = ["Afecto", "Trapo", "Perrera", "Paciente", "Ojear", "Consumir", "Parpadear", "Despejado", "Madera", "Volver", "Migaja", "Muchas", "Delincuente", "Perfume", "Etiqueta", "Acostarse", "Caro", "Restaurante", "Derecho", "Masaje"];
let listaColores = ["white", "black", "red", "blue", "magenta", "lightblue", "orange", "yellow", "pink", "green"];
let i = 1;
let selectorPalabra = 0;
let selectorColor = 0;
let longitudListaColores = 9;
let longitudListaPalabras = 19;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for(let element of elementsP){
    element.style.fontSize = i.toString(10) + "px";
    randNum = getRandomInt(0, longitudListaPalabras)
    element.textContent = listaPalabras[randNum];
    element.style.color = listaColores[selectorColor];
    selectorPalabra++;
    selectorColor++;
    i += 10;
    if(selectorColor >= longitudListaColores){
        longitudListaColores = 0;
    }
}

for(let element of elementsH2){

    element.style.color = "black";
    selectorPalabra++;
    selectorColor++;
    i += 10;
    if(selectorColor >= longitudListaColores){
        longitudListaColores = 0;
    }
}

for(let element of elementsIMG){
    randNumWidth = getRandomInt(3, 250);
    randNumHeight = getRandomInt(3, 250);
    element.style.width = randNumWidth.toString(10) + "px";
    element.style.height = randNumHeight.toString(10) + "px";
    
    randNumBorderRadius = getRandomInt(0, 300);
    element.style.borderRadius = randNumBorderRadius.toString(10) + "px";
}
