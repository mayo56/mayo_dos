import PrinterManager from "./printerManager";

/**
 * Manager de commande. Il vérifiie les commandes entrée et les executes.
 */
export default class CommandsManager {
    private printer = new PrinterManager();

    private readonly commandsList = {

    }

    constructor(public path: string) {
        /**
         * Boucle qui charge les commandes.
         */
    };

    /**
     * Methode qui execute la commande entrée.
     * @returns boolean sortir ou non de la boucle de demande de commande
     */
    public execute(commandsArgs: string[]): boolean {

        if (Object.keys(this.commandsList).includes(commandsArgs[0])) {
            return this.commandsList[commandsArgs[0] as keyof typeof this.commandsList]; // execute la commande répertorié
        } else {
            this.printer.message("[cM]Cette commande n'existe pas.[/cM]", true); // message d'erreur
            return false;
        };
    };

};