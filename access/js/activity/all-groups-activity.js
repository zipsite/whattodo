import { StandActivity } from "../classes/stand-activity.js";
import SimpleHeader from "./elem/simple-header.js";

export default class AllGroupsActivity extends StandActivity {
    constructor(parentnode, manager) {
        super(parentnode, manager);
        this.header = new SimpleHeader(this.elem,'elem/simple-header');
        this.header.setDisplayText('Группы');


        this.parentnode.append(this.elem);
    }
}