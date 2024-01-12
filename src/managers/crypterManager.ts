/**
 * crypter pour les password
 * 
 */

class CrypterManager {
    private char: string = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789!:;,.?&()[]{}=+@^";

    constructor (private key?: number, private cryptedPassword?:string) {};

    private decode (): string {
        if (!this.cryptedPassword || !this.key) return "";
        let decryptedPassword = "";
        for (const lettre of this.cryptedPassword) {
            const position = this.char.indexOf(lettre); // position de la lettre
            // position - clé de cryptage
            if (position - this.key < 0) {
                decryptedPassword += this.char[this.char.length + (position - this.key)];
            } else {
                decryptedPassword += this.char[position - this.key];
            };
        };
        return decryptedPassword;
    };


    public verify(input:string):boolean {
        return input == this.decode();
    };

    public encrypte(input:string): [string, number] {
        let encryptedPassword = "";
        this.key = Math.floor(Math.random() * this.char.length);

        while (this.key === 0) {
            this.key = Math.floor(Math.random() * this.char.length);
        };
        
        for (const lettre of input) {
            const position = this.char.indexOf(lettre); // position de la lettre
            // position + clé de cryptage
            if (position + this.key > this.char.length) {
                encryptedPassword += this.char[(position + this.key) - this.char.length];
            } else {
                encryptedPassword += this.char[position + this.key];
            };
        };
        return [encryptedPassword, this.key];
    };
};

export default CrypterManager;