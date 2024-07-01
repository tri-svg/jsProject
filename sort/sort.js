function updateSorter(lst, baseColor) {
    sorter = document.getElementById('sorter');
    sorter.innerHTML = '';

    for (i in lst) {
        sorter.innerHTML += `<span id='elt${i}' class ="elt_sort" >i${lst[i]}</span>`;
        document.getElementById(`elt${i}`).style.backgroundColor = `hsl(${baseColor + (lst[i] * 10)},100%,50%)`;

    }



}

function updateSorterEvent(idSelected) {
    ColorElements = document.getElementsByClassName('elt_sort');
    console.log(ColorElements);

    for (let i = 0; i < ColorElements.length; i++) {

        let colorElt = ColorElements[i];
        colorElt.addEventListener("click", function () { 
            console.log("case "+colorElt.id[3]+" cliqué")
            selectElt(colorElt.id[3], idSelected)
             
        })
    }
}

function permute(lst, i1, i2) {
    let temp = lst[i2];
    lst[i2] = lst[i1];
    lst[i1] = temp;
}

function selectElt(id, idSelected) {
    //si aucune case n'est sélectionné la case[id] devient la sélection
    if (idSelected == null) {
        idSelected = id;
        console.log("id sélectionné devient "+idSelected);
    } else {
        //si une case est déjà sélectionné, permuter les deux
        permute(lstColor, eltSelected, id);
        //console.log(lstColor);
    }
    return idSelected;
}



document.addEventListener("DOMContentLoaded", function () {


    const baseColor = Math.round(Math.random() * 255);
    let titre = document.getElementById('titre');
    let sortButton = document.getElementById('sortButton');
    let shuffleButton = document.getElementById('shuffleButton');
    let eltSort = document.getElementsByClassName('elt_sort');

    let lstColor = ['0','1', '2', '3', '4', '5', '6', '7'];
    let idSelected = null;

    updateSorter(lstColor, baseColor);
    updateSorterEvent(idSelected)

    titre.addEventListener("click", function () {
        titre.style.color = 'red';
    });


    //sorter
    sortButton.addEventListener("click", function () {
        lstColor.sort();
        updateSorter(lstColor, baseColor);
        updateSorterEvent(idSelected)
    });

    //randomizer
    shuffleButton.addEventListener("click", function () {
        lstColor.sort(function () { return 0.5 - Math.random() });
        //console.log(lstColor);
        updateSorter(lstColor, baseColor);
        updateSorterEvent(idSelected)
    })





})

//trié les couleur
//8 teinte à replacer à la main + un bouton pour les placer manuellement