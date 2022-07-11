import TaskElem from "./task-elem.js";

export default class TaskList {
    constructor(placeNonComplete, placeComplete, arrTask, checkTaskHandler, editTaskHandler) {
        this.checkTaskHandler = checkTaskHandler;
        this.editTaskHandler = editTaskHandler;
        this.placeNonComplete = placeNonComplete;
        this.placeComplete = placeComplete;
        this.arrTask = arrTask;
        this.arrTaskElem = [];

        this.createElem();
    }

    createElem() {
        this.placeNonComplete.innerHTML = '';
        this.placeComplete.innerHTML = '';
        let parentNode;
        for (let i = 0; i < this.arrTask.length; i++) {
            if (this.arrTask[i].getChecked() == 'nocheck') parentNode = this.placeNonComplete;
            else if (this.arrTask[i].getChecked() == 'check') parentNode = this.placeComplete;
            this.arrTaskElem[i] = new TaskElem(parentNode, 'elem/task-elem');
            this.arrTaskElem[i].setNameTask(this.arrTask[i].getName());
            this.arrTaskElem[i].setDescriptionTask(this.arrTask[i].getDescription());
            this.arrTaskElem[i].setGroupTask(this.arrTask[i].getGroup());
            this.arrTaskElem[i].setChecked(this.arrTask[i].getChecked());
            this.arrTaskElem[i].elem.setAttribute('id', `notask-list-${i}`);
            this.arrTaskElem[i].taskCheckPlace.setAttribute('id', `notask-checkbox-${i}`);
            this.arrTaskElem[i].elem.setAttribute('id', `notask-list-${i}`);
            this.arrTaskElem[i].taskCheckPlace.addEventListener('click', this.checkDayTaskHandler.bind(this));
        }
    }


    checkDayTaskHandler(e) {
        e.stopPropagation();
        let elemId = e.currentTarget.id.split('-');
        elemId = Number(elemId[2]);
        if (this.arrTask[elemId].getChecked() == 'nocheck') {
            this.arrTask[elemId].setChecked('check');
            this.arrTaskElem[elemId].setChecked(this.arrTask[elemId].getChecked());
        }
        else if (this.arrTask[elemId].getChecked() == 'check') {
            this.arrTask[elemId].setChecked('nocheck');
            this.arrTaskElem[elemId].setChecked(this.arrTask[elemId].getChecked());
        }
        this.createElem()
    }


}