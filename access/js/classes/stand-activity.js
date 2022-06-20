import { webRequest } from "./webrequest.js";

export class StandActivity {
    constructor(screennode, manager) {
        this.screennode = screennode;
        this.xhr = new webRequest();
        this.manager = manager;
    }

    loadElemAsinc (layoutName) {
        this.xhr.SendRequest("GET", `/access/layouts/${layoutName}.html`, "", this.hundlerRequest.bind(this));
    }

    loadElemSinc (layoutName) {
        var request = new XMLHttpRequest();
        request.open('GET', `/access/layouts/${layoutName}.html`, false);  // `false` makes the request synchronous
        request.send(null);
        if (request.status === 200) {
            return request;
        }
    }
}