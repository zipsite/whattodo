import Elem from "../classes/elem.js";
import ElemListCheck from "./elem-list-check.js";

export default class DropDownListCheck extends Elem {
    constructor(parentNode, nameElem, arrVariants) {
        super(nameElem);
        this.parentNode = parentNode;
        this.arrVariants = arrVariants;

        this.placeElem = this.fragm.getElementById('place-elem');
        this.header =  this.fragm.getElementById('header');
        this.status =  this.fragm.getElementById('status');
        this.statusIcon = this.fragm.getElementById('status-icon');
        this.clickPlace = this.fragm.getElementById('click-place');

        this.arrElem = [];

        this.setList(this.arrVariants);

        this.setChecked(0);

        this.elem = this.box.childNodes[0];
        this.parentNode.prepend(this.elem);
    }

    setStatus (status) {
        if (status == 'open') {
            this.statusIcon.setAttribute('src', '/access/svg-icon/arrow-up.svg');
            this.placeElem.classList.toggle("hide-box", false);
        }
        else if (status == 'close') {
            this.statusIcon.setAttribute('src', '/access/svg-icon/arrow-down.svg');
            this.placeElem.classList.toggle("hide-box", true);
        }
        this.statusElem = status;
    }

    getStatus () {
        return this.statusElem;
    }

    setList (list) {
        for (let i = 0; i < list.length; i++) {
            this.arrElem.push(new ElemListCheck(this.placeElem, 'elem/elem-list-check'));
            this.arrElem[i].setText(list[i]);
            this.arrElem[i].elem.setAttribute('id', `elem-list-${i}`);
            this.arrElem[i].elem.addEventListener('click', this.changeHundler.bind(this));
        }
    }

    setChecked (count) {
        for (let i = 0; i < this.arrElem.length; i++) {
            this.arrElem[i].setStatus('nocheck');
        }
        this.arrElem[count].setStatus('check');
    }

    changeHundler(e){
        let arrid = e.currentTarget.id.split('-');
        this.setChecked(Number(arrid[2]));
    }
}