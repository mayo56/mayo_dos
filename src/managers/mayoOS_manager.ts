import PrinterManager from "./printerManager";
import { UsersManager } from "./userManager";
import prompt from "prompt-sync";
import PromptManager from "./promptManager";

/**
 * Classe manager de l'os. Gère le lancement et l'execution des commandes.
 * @alpha 0.0.2
 */
class MayoOSManager {
    private printer: PrinterManager = new PrinterManager();
    private users: null | UsersManager = null;

    constructor() {
        this.start();
    }

    /**
     * Methode start, démarre les processus de démarage.
     */
    private start(): void {
        this.printer.message("Demarage en cours...\n", false);
        this.users = new UsersManager();

        let connected = false;
        while (!connected) {
            let inputInfo = {
                username: prompt({})({"ask": "Username: "}).trim(),
                password: prompt({})({"ask": "Password: "}).trim(),
            };

            const response = this.users.login(inputInfo.username, inputInfo.password);
            if (response) {
                connected = response;
            } else {
                this.printer.message("[cR]Identifiant ou mot de passse incorrect.[/cR]", true);
            };
        };
        new PromptManager("home\\0\\");
    };
};

export default MayoOSManager;