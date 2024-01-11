import PrinterManager from "./printerManager";
import { UsersManager } from "./userManager";
import readline from "readline";
import process from "node:process"

/**
 * Classe manager de l'os. Gère le lancement et l'execution des commandes.
 * @alpha 0.0.1
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
        this.printer.message("Demarage en cours...", false);
        this.users = new UsersManager();

        let connected = false;
        while (!connected) {
            let inputInfo = { username: "", password: "" };

            var rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });

            rl.question("What do you think of Node.js? ", (answer:string) => {
                console.log("Thank you for your valuable feedback:", answer);
                rl.close();
            });

            const response = this.users.login(inputInfo.username, inputInfo.password);
            if (response) {
                connected = response;
            } else {
                this.printer.message("Identifiant ou mot de passse incorrect.");
            };
        };
    };
};

export default MayoOSManager;