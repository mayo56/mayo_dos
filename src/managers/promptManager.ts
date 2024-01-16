import prompt from "prompt-sync";
import CommandsManager from "./commandsManager";

export default class PromptManager {

    public cancel = false;

    constructor(private path: string) {
        // Boucle d'execution de commande
        while (!this.cancel) {
            const commande = prompt()({ "ask": `${this.path}> `}).trim().split(/ +/g); // demande de commade
            this.execute(commande);
        };
    };

    private execute(commande: string[]) {
        const prompt = new CommandsManager(commande, this.path)
        this.cancel = prompt.execute() || false; // Execute la commande (sortie si erreur ou demande)
        this.path = prompt.path; // Récupère le path si jamais il change
    };
};