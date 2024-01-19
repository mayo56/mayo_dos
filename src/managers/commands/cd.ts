import { commandReturn, commands } from "../../assets/types";
import FolderManager from "../folderManager";
import PrinterManager from "../printerManager";
import { formatPath } from "../promptManager";


export default {
    name: "cd",
    aliases: [],
    exec(commandsArgs: string[], path: string[]): commandReturn | void {
        if (!commandsArgs[0]) {
            // Si vide

            new PrinterManager().message("[cR]Veuillez rentrer un chemin d'accès.[/cR]", true);
            return { cancel: false, path, error: false };
        } else if (commandsArgs[0] === ".") {
            // Si "."

            return { cancel: false, path, error: false };
        } else if (commandsArgs[0] === "..") {
            // Si ".." (pour aller au dossier précédent)

            if (!path) return { cancel: false, path, error: false };
            path.pop();
            return { cancel: false, path, error: false };
        } else {
            // Sinon, si c'est un chemin d'accès

            const newPath = commandsArgs[0].split(/\//g);
            if (new FolderManager(path).to(newPath)) {
                // Chemin valide

                return { cancel: false, path, error: false };
            } else {
                // Chemin invalide

                new PrinterManager().message(`[cY]${formatPath(newPath)}[/cY] [cR]Chemin d'accès non valide.[/cR]`, true)
                return { cancel: false, path, error: false };
            };
        }
    }
} as commands;