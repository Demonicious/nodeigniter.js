import { Instance, Logger, Session } from "../../../module";
interface HttpHeadersObject {
    code: number;
    headers: any;
}
interface HttpObject {
    request: Request | any;
    response: Response | any;
    head: HttpHeadersObject;
}
interface ControllerLoaderObject {
    view: Function;
    model: Function;
    library: Function;
    config: Function;
}
interface InputObject {
    get: any;
    post: any;
    params: any;
}
declare class Controller {
    _instance: Instance | any;
    _http: HttpObject;
    _toRender: string;
    input: InputObject;
    session: Session | any;
    library: any;
    model: any;
    config: any;
    load: ControllerLoaderObject;
    set_headers: Function;
    private render;
    _log: Logger;
    _preProcessingRoute_(app: Instance, req: any, res: any, method: string): void;
}
export { Controller };