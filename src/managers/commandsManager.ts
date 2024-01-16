import PrinterManager from "./printerManager";

/**
 * Manager de commande. Il vérifiie les commandes entrée et les executes.
 */
export default class CommandsManager {

    private readonly commandList = {
        "cd": this.cd(),
        "exit": this.exit()
    };

    private printer = new PrinterManager();

    constructor(public commandsArgs: string[], public path: string) { };

    /**
     * Methode qui execute la commande entrée.
     * @returns boolean sortir ou non de la boucle de demande de commande
     */
    public execute(): boolean {
        console.log("1", this.commandsArgs)
        if (Object.keys(this.commandList).includes(this.commandsArgs[0])) {
            console.log("2",this.commandsArgs)
            return this.commandList[this.commandsArgs[0] as keyof typeof this.commandList]; // execute la commande répertorié
        } else {
            this.printer.message("[cM]Cette commande n'existe pas.[/cM]", true); // message d'erreur
            console.log(this.commandsArgs)
            return false;
        };
    };

    private cd(): boolean {
        return false
    };

    private exit(): boolean {
        console.log(this.commandsArgs)
        if (this.commandsArgs.length > 1) {
            if (["-h", "--help"].includes(this.commandsArgs[1])) {
                this.printer.message("Aide commande exit")
                return false;
            } else {
                this.printer.message(`[cR]Argument "${this.commandsArgs[1]}" n'existe pas.[/cR]`);
                return false;
            }
        }
        return true;
    };

};