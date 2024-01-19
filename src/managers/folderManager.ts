import { readdirSync } from "node:fs";
import { formatPath } from "./promptManager";

export default class FolderManager {

    private folders: string[] = [];

    constructor(private path: string[]) {
        this.folders = readdirSync(`${this.formatPathForReaddir()}`);
    };

    private formatPathForReaddir() {
        return `${__dirname}/../${formatPath(this.path)}`
    };

    public to(newPath: string[]): boolean {
        if (newPath.length <= 1) {
            return this.folders.includes(newPath[0]);
        } else {
            let path = this.formatPathForReaddir()
            for (const folder of newPath) {
                if (!readdirSync(this.formatPathForReaddir()).includes(folder)) return false;
                this.path.push(folder);
                path = this.formatPathForReaddir();
            };
            return true;
        };
    };
};