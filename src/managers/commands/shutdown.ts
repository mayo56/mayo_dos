import { commandReturn, commands } from "../../assets/types";
import PrinterManager from "../printerManager";

export default {
    name: "shutdown",
    aliases: ["sd"],
    exec(commandsArgs: string[], path: string[]): commandReturn {

        if (["-h", "--help"].includes(commandsArgs[0])) {
            new PrinterManager("Aide pour la commande d")
                .color()
                .send();
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