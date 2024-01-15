import prompt from "prompt-sync";
import CommandsManager from "./commandsManager";

class PromptManager {

    public cancel = false;


    constructor(private path: string) {
        while (!this.cancel) {
            const commande = prompt()({ "ask": `${this.path}> ` }).trim().split(/ +/g);
            this.execute(commande);
        };
    };

    private execute(commande: string[]) {
        this.cancel = new CommandsManager(commande, this.path).execute() || false;
    };
};

export default PromptManager;