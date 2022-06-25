import { StandActivity } from "../classes/stand-activity.js";
import BigHeader from "./big-header.js";
import Button from "./icon-button.js";
import InputText from "./input-text.js";

export default class loginActivity extends StandActivity {
    constructor(screen, manager) {
        super(screen, manager);

        this.header = new BigHeader(this.screen.screennode,"elem/big-header");
        this.header.setDisplayText("Вход");

        this.screen.screennode.insertAdjacentHTML('beforeend',
        this.loadElemSinc('login-layout').responseText);

        this.inputPlace = this.screen.fragm.getElementById("input-place");
        this.btnPlace = this.screen.fragm.getElementById("btn-place");

        this.emailInput = new InputText(this.inputPlace, "elem/input-text");
        this.passInput = new InputText(this.inputPlace, "elem/input-text");

        this.emailInput.setPlaceholder('Email');
        this.passInput.setPlaceholder('Пароль');

        this.btnLogin = new Button(this.btnPlace, 'elem/primary-big-button');
        this.btnRegist = new Button(this.btnPlace, 'elem/secondary-big-button');
        
        this.btnLogin.setDisplayText('Вход');
        this.btnRegist.setDisplayText('Регистрация');

        this.btnLogin.elem.addEventListener('click', this.loginHundler.bind(this));

        this.screen.pushWindow();
    }

    loginHundler () {
        this.manager.insert('btn-bar-activity');
    }
}