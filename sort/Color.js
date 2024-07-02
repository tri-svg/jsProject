class Color{
    constructor(sorter,color,id){
        this.HTMLcontent = `<span id='elt${id}' class ="elt_sort" >i${id}</span>`;
        this.color = color;
        this.id = id;
        this.elt = null;
    }

    place(sorter){
        sorter.innerHtml += this.HTMLcontent;
        this.elt = document.getElementById(`elt${this.id}`);
        this.elt.style.backgroundColor = this.color;
        this.elt.addEventListener("click",function(){
            sorter.style.backgroundColor = 'red'
        })
    }

}

export default Color;