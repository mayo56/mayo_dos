import PrinterManager from "./printerManager";
import { UsersManager } from "./userManager";
import prompt from "prompt-sync";
import PromptManager from "./promptManager";

/**
 * Classe manager de l'os. Gère le lancement et l'execution des commandes.
 * @alpha 0.0.6
 */
export default class MayoOSManager {
    private users: null | UsersManager = null;

    constructor() {
        this.start();
    }

    /**
     * Methode start, démarre les processus de démarage.
     */
    private start(): void {
        new PrinterManager()
            .clear() // efface la console
        new PrinterManager("[cR]Demarage en cours...[/cR]\n")
            .color()
            .send();
        this.users = new UsersManager();

        let connected = false;
        while (!connected) {
            let inputInfo = {
                username: prompt({})({"ask": "Username: "}).trim(),
                password: prompt()({"ask": "Password: ", echo:"*"})
            };

            const response = this.users.login(inputInfo.username, inputInfo.password);
            if (response) {
                connected = response;
            } else {
                new PrinterManager("[cR]Identifiant ou mot de passse incorrect.[/cR]")
                    .color()
                    .send();
            };
        };
        new PromptManager(["home", "0"]);
    };
};