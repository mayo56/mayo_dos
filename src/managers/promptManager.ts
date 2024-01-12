import PrinterManager from "./printerManager";
import prompt from "prompt-sync";

class PromptManager {

    public cancel = false;
    private printer = new PrinterManager();

    constructor (private path: string) {
        while (!this.cancel) {
            const commande = prompt()({"ask": `${this.path}> `});
            this.execute();
        };
    };

    private execute() {
        this.printer.message("[cY][En cours de construction][/cY]", true);
    };
};

export default PromptManager;