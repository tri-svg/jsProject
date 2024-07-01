//import Sorter from "Sorter.js";

class Sorter{
    constructor(colorNumber){
        this.colorSelected = null
        this.colorLst = Array()
        this.eltHTML = document.getElementById('sorter')
        this.baseColor = Math.round(Math.random() * 255);

        for (let i=0; i < colorNumber; i++) {
            this.colorLst.push(i)
            this.eltHTML.innerHTML += `<span id='elt${i}' class ="elt_sort" >i${i}</span>`;
            document.getElementById(`elt${i}`).style.backgroundColor = `hsl(${this.baseColor + (this.colorLst[i] * 10)},100%,50%)`;
    
        }

        //implémenter les méthodes shuffle et sort

    }
}


document.addEventListener("DOMContentLoaded", function () {
    sorter = new Sorter(15);
    console.log(sorter);
 })