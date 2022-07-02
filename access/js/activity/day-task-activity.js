import { StandActivity } from "../classes/stand-activity.js";
import SimpleHeader from "./simple-header.js";

export default class DayTaskActivity extends StandActivity {
    constructor(parentnode, manager) {
        super(parentnode, manager);
        this.header = new SimpleHeader(this.elem,'elem/simple-header');
        this.header.setDisplayText('Что делать?');


        this.parentnode.append(this.elem);
    }
}