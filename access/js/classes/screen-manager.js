import {Screen} from "./screen.js";
export class ScreenManager {

    constructor(parentnode){
        this.screen = new Screen(parentnode);
        console.log("ScreenManager create");
    }
    insert(activityName) {
        import(`../activity/${activityName}.js`).then(this.handlerModule.bind(this));
    }
    handlerModule (module) {
        this.screen.setwindow(module.default, this);
    }
}