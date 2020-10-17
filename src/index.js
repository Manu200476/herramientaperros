var button = document.getElementById("btn");
var contador = 0;

function rangeSlider (value){
    document.getElementById("value").innerHTML = `${value} kg`;
}

function sliderValue (){
    let inputRange = document.getElementById("myRange").value;
    return inputRange;
}

function selectValue (){
    let select = document.getElementById("selectId");
    let selectedOptions = select.options[select.selectedIndex].text;
    return selectedOptions;
}

function tomasComidas(){
    let cuentaResults = sliderValue() * 10;

    for (let i = 1; i <= selectValue(); i++){
        let p = document.createElement("p");
        let t = document.createTextNode(`Toma ${i}: ${cuentaResults} gr `);

        p.classList.add('resultados-parrafo');
        
        p.appendChild(t);
        document.getElementById("resultados").appendChild(p);
    }
}

button.onclick = () => {
    contador++;
    if (contador <= 1) {
        tomasComidas();
    } else {
        return null;
    }
}
