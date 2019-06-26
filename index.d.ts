// Type definitions for OctoberCMS framework.js v1.0.443
// Project: https://octobercms.com/
// Definitions by: Kanji Furuhashi <https://github.com/pikanji/>
// Definitions: https://github.com/pikanji/oc-framework-ts-types

interface JQueryStatic {
    request(handler: string, options: any): any;
    oc: {
        flashMsg(param: {
            text: string,
            class: string,
            interval?: number,
        }): void
    };
}
