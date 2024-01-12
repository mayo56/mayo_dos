type colors = "white"

/**
 * Classe d'impression sur l'écran, affiche se qu'on lui dit avec la couleur demandé.
 * @alpha 0.0.1
 */
class PrinterManager {

    private colors = require("../assets/colors.json")

    /**
     * Methode permettant d'afficher du texte normalement ou formaté.
     * @param format Si le texte transmit doit être formaté pour des couleurs
     * ```js
     * new PrinterManager("Bonjour !").message();
     * ```
     * ```sh
     * >>> Bonjour !
     * ```
     */
    public message(text:string, format: boolean = false): void {
        if (format) text = this.format(text);
        console.log(text);
    }

    /**
     * Format le texte avec les couleurs
     * @param text Le texte à formater
     */
    private format(text:string): string {
        for (const color in this.colors) {
            text = text.replace(new RegExp(`\\[${color}\\]`, "g"), `\x1b[${this.colors[color]}m`);
            text = text.replace(new RegExp(`\\[\/${color}\\]`, "g"), `\x1b[0m`);
        };
        return text;
    }
};

export default PrinterManager;