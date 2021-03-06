"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = require("./../../../module");
class Library {
    constructor(autoload, paths, db, sess) {
        this._paths = {};
        this._priv = {};
        this._paths = paths;
        this._priv._sess = sess;
        this._priv._db = db;
        this.ni = {
            config: {},
            helper: {},
            load: {
                model: (modelName) => {
                    let name = modelName.replace('.js', '');
                    name = name.replace('.ts', '');
                    this.ni[name] = module_1.Functions.loadModel(autoload, this._paths, this._priv._db, this._priv._sess, name);
                },
                library: (libraryName) => {
                    let name = libraryName.replace('.js', '');
                    name = name.replace('.ts', '');
                    this.ni[name.toLowerCase()] = module_1.Functions.loadLibrary(autoload, this._paths, this._priv._db, this._priv._sess, name);
                },
                config: (configName) => {
                    let name = configName.replace('.js', '');
                    name = name.replace('.ts', '');
                    this.ni.config[name] = module_1.Functions.loadConfig(this._paths.configs, name);
                },
                helper: (helperName) => {
                    let name = helperName.replace(".js", "");
                    name = name.replace(".ts", "");
                    let helpers = module_1.Functions.loadHelperFunctions(this._paths.helpers, name);
                    let helper = null;
                    for (helper in helpers) {
                        this.ni.helper[helper] = helpers[helper];
                    }
                }
            }
        };
        if (autoload.configs.length > 0)
            autoload.configs.forEach((config) => { config = config.toString(); this.ni.load.config(config); });
        if (autoload.helpers.length > 0)
            autoload.helpers.forEach((helper) => { helper = helper.toString(); this.ni.load.helper(helper); });
    }
}
exports.Library = Library;
