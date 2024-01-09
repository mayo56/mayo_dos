import { readdirSync, mkdirSync } from "node:fs";


/**
 * Class qui gère tous les utilisateurs. Est appelé quand l'os démarre
 * Il gère les passwords et identifiants.
 */
class UsersManager {
    private path = `${__dirname}/../`
    constructor() {
        // vérification du fichier /home
        if (!readdirSync(this.path).includes("home")) mkdirSync(this.path + "/home");
        this.path += "/home"

    }
}

/**
 * Class qui gère l'utilisateur connecté. Donne les privillèges selon l'utilisateur
 */
class UserManager {

}


export {
    UserManager,
    UsersManager
};