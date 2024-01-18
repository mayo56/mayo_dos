import { commandReturn, commands } from "../../assets/types";
import PrinterManager from "../printerManager";
import PrinterManager from "../printerManager";

export default {
    name: "shutdown",
    aliases: ["sd"],
    exec(commandsArgs: string[], path: string): commandReturn {
        const printer = new PrinterManager();

        if (["-h", "--help"].includes(commandsArgs[0])) {
            printer.message("Aide pour la commande d");
            return {
                "error": false,
                "path": path,
                "cancel": false,
            };
        };

        return {
            "error": false,
            "path": path,
            "cancel": true,
        };
    },
} as commands;