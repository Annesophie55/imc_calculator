const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];


// IMC = poids en kg / taille² en m

//  Gérez les inputs, retrouvez leur valeur dans votre script quand on clique sur le bouton.
//  Faites une validation basique, empêchez le calcul si l'utilisateur laisse un ou deux inputs vides. 
// Montrez également un message pour l'informer de l'erreur (ex : "Veuillez remplir les inputs").
//  Calculez l'IMC avec les valeurs rentrées.
//  Calculez le rang de l'IMC par rapport à "IMCData"
//  Remplissez l'interface en fonction des résultats
let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    calculIMC();
})




function calculIMC(){
  let input = document.querySelectorAll('input');
  let taille = input[0].value;
  let poids = input[1].value;
  taille = taille / 100;
  let calculTaille = Math.pow(taille,2);
  let result = poids / calculTaille;
  result = Math.round(result);
  console.log(result);
  resultReturn(result);
}
function resultReturn(result){

  let resultNb = document.querySelector('.result-nb');
  let resultTxt = document.querySelector('.result-txt');
  let rang = BMIData.find((element) => {
    if(result >= element.range[0] && result <= element.range[1]){
      console.log(element);
      return element;
    }
    else if(typeof element.range === 'number' && result >= element.range){
      console.log(element);
      return element;
    }
 } )
 resultNb.textContent = result;
 resultTxt.textContent = rang.name;
 resultTxt.style.color = rang.color;
}





