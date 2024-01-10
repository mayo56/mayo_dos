import PrinterManager from "./printerManager";
import { UsersManager } from "./userManager";

/**
 * Classe manager de l'os. Gère le lancement et l'execution des commandes.
 * @alpha 0.0.1
 */
class MayoOSManager {
    private printer: PrinterManager = new PrinterManager();
    private users: null | UsersManager = null;

    constructor () {
        this.start();
    }

    /**
     * Methode start, démarre les processus de démarage.
     */
    private start():void {
        this.printer.message("Demarage en cours...", false);

    }
};

export default MayoOSManager;