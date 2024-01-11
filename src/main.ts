import MayoOSManager from "./managers/mayoOS_manager";

import CrypterManager from "./managers/crypterManager";

// Démarage de l'os depuis le main
console.log(new CrypterManager().encrypte("admin"));
new MayoOSManager();