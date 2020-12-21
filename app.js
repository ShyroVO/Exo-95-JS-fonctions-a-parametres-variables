//1:
let tab = ["param1", "param2", "param3"];
let div = document.getElementById('monDiv');

function paramVar (tableau){
    return div.innerHTML += "Bonjour " + tableau.join(", ") + "<br>";
}

paramVar(tab);

tab.push("caca");
paramVar(tab);

//2:
let nouveauTab = [1, 4, 9];

function paramVar2 (tableau){

    return div.innerHTML += tableau.reduce(function (accu, value){
        if (Number.isInteger(value)){
            return accu + value;
        }

    }) + "<br>";
}

paramVar2(nouveauTab);

nouveauTab.push(26);
paramVar2(nouveauTab);

nouveauTab.push(12);
paramVar2(nouveauTab);


// 3:
function paramVar3 (tableau){
    return div.innerHTML += (tableau.reduce(function (accu, value){
        return (accu + value);
    }) * 11.76).toFixed(0) + "<br>";
}

paramVar3(nouveauTab);