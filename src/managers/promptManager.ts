import prompt from "prompt-sync";
import CommandsManager from "./commandsManager";

export function formatPath (path:string[]) {
    let pathString:string = "";
    path.map((folder) => {
        pathString += folder + "/";
    });
    if (!path) pathString = "/";
    return pathString;
}

export default class PromptManager {

    public cancel = false;
    private commandes = new CommandsManager(this.path); // On charge les commandes

    constructor(private path: string[]) {
        // Boucle d'execution de commande
        while (!this.cancel) {
            const commande = prompt()({ "ask": `${formatPath(this.path)}> `}).trim().split(/ +/g); // demande de commade
            this.execute(commande);
        };
    };

    private execute(commande: string[]) {
        this.cancel = this.commandes.execute(commande) || false; // Execute la commande (sortie si erreur ou demande)
        this.path = this.commandes.path; // Récupère le path si jamais il change
    };
};