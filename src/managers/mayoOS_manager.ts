import PrinterManager from "./printerManager";

/**
 * Classe manager de l'os. Gère le lancement et l'execution des commandes.
 * @alpha 0.0.1
 */
class MayoOSManager {
    private Printer = new PrinterManager()

    constructor () {
        this.start();
    }

    /**
     * Methode start, démarre les processus de démarage.
     */
    private start():void {
        this.Printer.message("Demarage en cours...", false);

    }
};

export default MayoOSManager;