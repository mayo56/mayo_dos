import { commandReturn, commands, manageCommandsType } from "../assets/types";
import PrinterManager from "./printerManager";
import { readdirSync } from "node:fs";

/**
 * Manager de commande. Il vérifiie les commandes entrée et les executes.
 */
export default class CommandsManager {
    private printer = new PrinterManager();

    private commandsList: manageCommandsType[] = [];

    constructor(public path: string[]) {
        const fileList = readdirSync(`${__dirname}/commands`).filter(file => file.endsWith(".ts"));
        for (const file of fileList) {
            const command = require(`${__dirname}/commands/${file}`).default as commands;
            this.commandsList.push([command.name, command.aliases, command.exec]);
        };
        console.log(this.commandsList)
    };

    /**
     * Methode qui execute la commande entrée.
     * @returns boolean sortir ou non de la boucle de demande de commande
     */
    public execute(commandsArgs: string[]): boolean {

        for (const command of this.commandsList) {
            if (command[0] === commandsArgs[0] || command[1].includes(commandsArgs[0])) {
                commandsArgs.shift();
                const reply = command[2](commandsArgs, this.path);

                // s'il y a une erreure
                if (reply.error) {
                    this.printer.message("[cR]Une erreure s'est produite[/cR]")
                    return true;
                };
                this.path = reply.path;
                return reply.cancel;
            }
        }
        this.printer.message("[cM]Cette commande n'existe pas.[/cM]", true); // message d'erreur
        return false;
    };

};