import { webRequest } from "./webrequest.js";

export class StandActivity {
    constructor(screennode) {
        this.screennode = screennode;
        this.xhr = new webRequest();
    }

    loadElem(layoutName) {
        this.xhr.SendRequest("GET", `/access/layouts/${layoutName}.html`, "", this.hundlerRequest.bind(this));
    }
}