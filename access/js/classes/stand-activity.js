import { webRequest } from "./webrequest.js";

export class StandActivity {
    constructor(parentnode, manager) {
        this.parentnode = parentnode;
        this.manager = manager;
        this.xhr = new webRequest();
        
        this.fragm = new DocumentFragment();

        this.elem = document.createElement("div");
        this.elem.classList.add("full-x-y", "guest-box-col");
        this.fragm.append(this.elem);
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