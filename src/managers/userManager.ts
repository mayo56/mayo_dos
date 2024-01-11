import { readdirSync, mkdirSync, writeFileSync } from "node:fs";
import CrypterManager from "./crypterManager";

type config = {
    users: string[],
    password: [string, number][],
    ids: string[]
}

/**
 * Class qui gère tous les utilisateurs. Est appelé quand l'os démarre
 * Il gère les passwords et identifiants.
 */
class UsersManager {
    private path = `${__dirname}/..`;
    private users: null | config = null

    constructor() {
        // vérification du fichier /home
        if (!readdirSync(this.path).includes("home")) {
            mkdirSync(this.path + "/home");
            const defaultConfigFile: config = {
                users: ["admin"],
                password: [["admin", 0]],
                ids: ["0"]
            }
            writeFileSync(this.path + "/config.json", JSON.stringify(defaultConfigFile));
            mkdirSync(`${this.path}/home/0`);
        };
        this.path += "/home";
        
        // Chargement du fichier config
        let config: config = require(`${this.path}/config.json`);
        this.users = config;
    };

    public login(username:string, password: string) {
        if (!this.users?.users.includes(username)) {
            return false;
        } else {
            const userInfo = this.users.password[this.users.users.indexOf(username)];
            return new CrypterManager(userInfo[1], userInfo[0]).verify(password);
        };
    };
};

/**
 * Class qui gère l'utilisateur connecté. Donne les privillèges selon l'utilisateur
 */
class UserManager {
    
}


export {
    UserManager,
    UsersManager
};