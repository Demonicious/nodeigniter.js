declare class Loader {
    res: any;
    viewFolder: string;
    modelFolder: string;
    renderAble: string;
    constructor(res: any, viewFolder: string, modelFolder: string);
    view(viewName: string, data: any): void;
}
export = Loader;
