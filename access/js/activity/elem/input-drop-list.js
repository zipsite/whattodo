import Elem from "../../classes/elem.js";
import InputDropListElem from "./input-drop-list-elem.js";

export default class InputDropList extends Elem {
    constructor(parentNode, nameElem) {
        super(nameElem);
        this.parentNode = parentNode;



        this.placeholder = this.fragm.getElementById('placeholder');
        this.selectedElem = this.fragm.getElementById('selected-elem');

        this.statusIcon = this.fragm.getElementById('status-icon');

        this.placeElem = this.fragm.getElementById('place-elem');

        this.arrElem = [];

        this.elem = this.box.childNodes[0];

        this.elem.addEventListener('click', this.openHandler.bind(this));
        this.parentNode.append(this.elem);
    }

    setPlaceholder(text){
        this.placeholder.innerText = text;
    }

    openHandler() {
        this.elem.classList.toggle('select-close');
        if(this.elem.classList.contains('select-close')){
            this.statusIcon.setAttribute('src', '/access/svg-icon/arrow-down.svg');
        }
        else if(!(this.elem.classList.contains('select-close'))){
            this.statusIcon.setAttribute('src', '/access/svg-icon/arrow-up.svg');
        }
    }

    setList(arrList) {
        this.arrList = arrList;
        this.createList();
    }

    createList () {
        for(let i = 0; i < this.arrList.length; i++) {
            this.arrElem[i] = new InputDropListElem(this.placeElem, 'elem/input-select-elem');
            this.arrElem[i].setText(this.arrList[i].count);
            this.arrElem[i].elem.setAttribute('id', `switch-elem-${i}`);



            this.arrElem[i].elem.addEventListener('click', this.switchElemHandler.bind(this));
        }
    }

    switchElemHandler(e) {
        e.stopPropagation();
        let elemId = Number(e.currentTarget.id.split('-')[2]);
        for (let i = 0; i < this.arrList.length; i++) {
            this.arrElem[i].elem.classList.toggle('selected-elem', false);
        }
        this.arrElem[elemId].elem.classList.toggle('selected-elem', true);
        // this.selectedElem.innerText = this.arrList[elemId].count;
    }
}