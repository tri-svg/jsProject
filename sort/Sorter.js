import Color from "./Color.js";


class Sorter {
    constructor(colorNumber) {
        this.colorSelected = null
        this.colorLst = Array()
        this.eltHTML = document.getElementById('sorter')
        this.baseColor = Math.round(Math.random() * 256);

        for (let i = 0; i < colorNumber; i++) {
            this.colorLst.push(i)
            this.eltHTML.innerHTML += `<span id='elt${i}' class ="elt_sort" >i${i}</span>`;
            document.getElementById(`elt${i}`).style.backgroundColor = `hsl(${this.baseColor + (this.colorLst[i] * 10)},100%,50%)`;

        }
    }

    update() {

        this.eltHTML.innerHTML = ''
        for (let i = 0; i < this.colorLst.length; i++) {
            this.eltHTML.innerHTML += `<span id='elt${i}' class ="elt_sort" >i${i}</span>`;
            document.getElementById(`elt${i}`).style.backgroundColor = `hsl(${this.baseColor + (this.colorLst[i] * 10)},100%,50%)`;

        }
    }

    shuffle() {
        this.colorLst.sort(function () { return 0.5 - Math.random() });
        this.update()

    }

    sort(){
        this.colorLst.sort((a, b) => a - b);
        this.update();
        console.log(this.colorLst)
        console.log(typeof this.colorLst[0])
    }
    
    //transformé les éléments de couleur en objet

}

export default Sorter;