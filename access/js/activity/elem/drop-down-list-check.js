import Elem from "../../classes/elem.js";
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

        this.arrElem = [];

        this.setList(this.arrVariants);

        this.setChecked(0);

        this.elem = this.box.childNodes[0];

        this.elem.addEventListener('click', this.openHundler.bind(this));

        this.parentNode.prepend(this.elem);
    }

    openHundler (e) {
        let check = e.currentTarget.classList.contains('drop-down-close');
        if (check) {
            this.statusElem = 'open';
            this.statusIcon.setAttribute('src', '/access/svg-icon/arrow-up.svg');
            this.elem.classList.toggle('drop-down-close', false);
        }
        else if (!(check)) {
            this.statusElem = 'close';
            this.statusIcon.setAttribute('src', '/access/svg-icon/arrow-down.svg');
            this.elem.classList.toggle('drop-down-close', true);
        }
        
    }

    getStatus () {
        return this.statusElem;
    }

    setList (list) {
        for (let i = 0; i < list.length; i++) {
            this.arrElem.push(new ElemListCheck(this.placeElem, 'elem/elem-list-check'));
            this.arrElem[i].setText(list[i]);
            this.arrElem[i].elem.setAttribute('id', `theme-list-${i}`);
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
        e.stopPropagation();
        let arrid = e.currentTarget.id.split('-');
        this.setChecked(Number(arrid[2]));
    }
}