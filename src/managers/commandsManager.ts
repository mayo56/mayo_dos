import PrinterManager from "./printerManager";


class CommandsManager {

    private commandList = {
        "cd": this.cd,
        "exit": this.exit
    };

    private printer = new PrinterManager();

    constructor(private commandsArgs: string[], private path: string) { };

    public execute(): boolean {
        if (Object.keys(this.commandList).includes(this.commandsArgs[0])) {
            return this.commandList[this.commandsArgs[0] as keyof typeof this.commandList]();
        } else {
            this.printer.message("[cM]Cette commande n'existe pas.[/cM]", true);
            return false;
        };
    };

    private cd(): boolean {
        return false
    };

    private exit(): boolean {
        return true;
    };

};

export default CommandsManager;