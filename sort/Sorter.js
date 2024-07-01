class Sorter{
    constructor(colorNumber){
        this.colorSelected = null
        this.colorLst = Array()
        this.eltHTML = document.getElementById('sorter')

        for (let i=0; i < colorNumber; i++) {
            this.colorLst.push(i)
            this.eltHTML.innerHTML += `<span id='elt${i}' class ="elt_sort" >i${i}</span>`;
            document.getElementById(`elt${i}`).style.backgroundColor = `hsl(${baseColor + (lst[i] * 10)},100%,50%)`;
    
        }

    }
}

export default Sorter;