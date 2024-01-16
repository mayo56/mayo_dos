import { commandReturn, commands } from "../../assets/types";


export default {
    name: "shutdown",
    aliases: ["sd"],
    exec(commandsArgs: string[], path: string): commandReturn {
        return {
            "error": false,
            "path": path,
            "cancel": false,
        }
    },
} as commands;