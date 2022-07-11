import { StandActivity } from "../classes/stand-activity.js";
import SimpleHeader from "./elem/simple-header.js";
import TaskList from "./elem/task-list.js";
import Task from "./pojo/task.js";

export default class DayTaskActivity extends StandActivity {
    constructor(parentnode, manager) {
        super(parentnode, manager);
        this.header = new SimpleHeader(this.elem,'elem/simple-header');
        this.header.setDisplayText('Что делать?');

        this.elem.insertAdjacentHTML('beforeend', this.loadElemSinc('day-task-layout').responseText);

        this.placeNonComplete = this.fragm.getElementById('place-non-complete');
        this.placeComplete = this.fragm.getElementById('place-complete');

        this.createTaskList();


        this.parentnode.append(this.elem);
    }

    

    editTaskHandler() {

    }

    createTaskList () {
        let arrTask = [
            new Task('домашка', '', 'Школа', 'nocheck', '1', '1'),
            new Task('домашка', '', 'Школа', 'nocheck', '1', '1'),
            new Task('домашка', '', 'Школа', 'check', '1', '1'),
            new Task('домашка', '', 'Школа', 'check', '1', '1')
        ];
        this.elemList = new TaskList(this.placeNonComplete, this.placeComplete, arrTask);
    }
}