type colors = "white"

/**
 * Classe d'impression sur l'écran, affiche se qu'on lui dit avec la couleur demandé.
 * @alpha 0.0.1
 */
export default class PrinterManager {

    private _data = require("../assets/colors.json");

    constructor(private _text: string = "") {}

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
    public send(): void {
        console.log(this._text);
    };

    public clear(): void {
        console.clear();
    };

    /**
     * Format le texte avec les couleurs
     * @param text Le texte à formater
     */

    public color(): this {
        for (const color in this._data.colors) {
            this._text = this._text.replace(new RegExp(`\\[${color}\\]`, "g"), `\x1b[${this._data.colors[color]}m`);
            this._text = this._text.replace(new RegExp(`\\[\/${color}\\]`, "g"), `\x1b[0m`);
        };
        return this;
    };
};