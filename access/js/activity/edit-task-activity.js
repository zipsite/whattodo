import { StandActivity } from "../classes/stand-activity.js";
import InputDropList from "./elem/input-drop-list.js";
import InputText from "./elem/input-text.js";
import OptionsHeader from "./elem/options-header.js";

export default class EditTaskActivity extends StandActivity {
    constructor(parentNode, manager) {
        super(parentNode, manager);
        this.header = new OptionsHeader(this.elem, 'elem/option-header');
        this.header.setDisplayText('Изменение задачи');

        this.elem.insertAdjacentHTML('beforeend', this.loadElemSinc('edit-task-layout').responseText);

        this.placeElem = this.fragm.getElementById('place-elem');


        this.nameTask = new InputText(this.placeElem, 'elem/input-text');
        this.nameTask.setPlaceholder('Название');

        this.descriptionTask = new InputText(this.placeElem, 'elem/input-text-area');
        this.descriptionTask.setPlaceholder('Описание');

        this.importanceTask = new InputDropList(this.placeElem, 'elem/input-select');
        this.importanceTask.setPlaceholder('Важность');

        this.importanceTask.setList([
            {check: 'check', count: 0},
            {check: 'check', count: 1},
            {check: 'check', count: 2},
            {check: 'check', count: 3}
        ]);


        this.urgencyTask = new InputDropList(this.placeElem, 'elem/input-select');
        this.urgencyTask.setPlaceholder('Срочность');

        this.urgencyTask.setList([
            {check: 'check', count: 0},
            {check: 'check', count: 1},
            {check: 'check', count: 2},
            {check: 'check', count: 3}
        ]);

        this.parentnode.append(this.elem);
    }
}