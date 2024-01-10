/**
 * crypter pour les password
 * 
 */


class CrypterManager {
    private char: string = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789!:;,.?&()[]{}=+@^";

    constructor (private key: number, private cryptedPassword:string) {};

    private decode (): string {
        let decryptedPassword = ""
        for (const lettre of this.cryptedPassword) {
            const position = this.char.indexOf(lettre) // position de la lettre
            // position - clé de cryptage
            if (position - this.key < 0) {
                decryptedPassword += this.char[this.char.length + (position - this.key)];
            } else {
                decryptedPassword += this.char[position - this.key];
            };
        };
        return decryptedPassword;
    };

    
    public verify(password:string):boolean {
        return password == this.decode();
    };
};

export default CrypterManager;