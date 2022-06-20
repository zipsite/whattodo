import { StandActivity } from "../classes/stand-activity.js";

export default class mainActivity extends StandActivity {
    constructor(screennode) {
        super(screennode);
        console.log("mainActivity start");
        this.loadElem("twowindow");
    }

    hundlerRequest(Request) {
        this.screennode.innerHTML = Request.responseText;
    }
}