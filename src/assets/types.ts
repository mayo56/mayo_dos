
/**
 * Type pour les commandes prompt.
 */
export type commands = {
    name: string,
    aliases: string[],
    exec(
        commandsArgs: string[],
        path: string,
    ): commandReturn,
};

/**
 * Type retourné après l'execution d'une commande.
 */
export type commandReturn = {
    error: boolean,
    path: string,
    cancel: boolean
};

export type manageCommandsType = [string, string[], ((commandsArgs: string[], path: string) => commandReturn)]