console.log('domLoops');

const dinosaurs = [
    {type: 't-rex', name: 'Wrex'},
    {type: 'stegosaurus', name: 'Steve'},
    {type: 'velociraptor', name: 'Ted'},
    {type: 'triceratops', name: 'Trike'}
];


const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};



const buildDinosaurCards = () => {
    let domString = '';
    for(let i = 0; i < dinosaurs.length; i++) {
        domString += '<div class="dinosaur">';
        domString += `<h3>${dinosaurs[i].type}</h3>`
        domString += `<p> name: ${dinosaurs[i].name}</p>`
        domString += '</div>';
    } 
    printToDom('dino-barn', domString);
    
};

buildDinosaurCards();