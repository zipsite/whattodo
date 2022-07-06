import Elem from "../../classes/elem.js";

export default class TaskElem extends Elem {
    constructor(parentNode, nameElem) {
        super(nameElem);
        this.parentNode = parentNode;

        this.checked = 'nocheck';
        
        this.nameTask = this.fragm.getElementById('name-task');
        this.descriptionTask = this.fragm.getElementById('description-task');
        this.groupTask = this.fragm.getElementById('group-task');
        
        this.taskCheckPlace = this.fragm.getElementById('task-check-place');
        // console.log(this.taskCheckPlace.id);
        this.taskCheckBox = this.fragm.getElementById('task-check-box');
        this.taskEditPlace = this.fragm.getElementById('task-edit-place');

        this.elem = this.box.childNodes[0];
        this.elem.addEventListener('click', this.switchOpenHandler);
        // this.elem.classList.toggle('check-elem-close');
        // this.elem.classList.toggle('check-elem-open');
        this.parentNode.append(this.elem);
    }

    switchOpenHandler(event) {
        event.currentTarget.classList.toggle('check-elem-close');
        event.currentTarget.classList.toggle('check-elem-open');
    }

    setNameTask(nameTask) {
        this.nameTask.innerText = nameTask;
    }
    setDescriptionTask(decriptionTask) {
        this.descriptionTask.innerText = decriptionTask;
    }
    setGroupTask(groupTask) {
        this.groupTask.innerText = groupTask;

    }
    setChecked(checked) {
        if (checked == 'check') {
            this.taskCheckBox.setAttribute('src', '/access/svg-icon/check-yes.svg');
        }
        else if (checked == 'nocheck') {
            this.taskCheckBox.setAttribute('src', '/access/svg-icon/check-no.svg');
        }
    }
}