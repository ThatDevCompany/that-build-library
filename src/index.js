"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clean_1 = require("./utils/clean");
const copy_1 = require("./utils/copy");
const echo_1 = require("./utils/echo");
const exec_1 = require("./utils/exec");
const npmPublish_1 = require("./utils/npmPublish");
const prettier_1 = require("./utils/prettier");
const removeModuleAlias_1 = require("./utils/removeModuleAlias");
const tsc_1 = require("./utils/tsc");
const processPackage_1 = require("./utils/processPackage");
const zip_1 = require("./utils/zip");
exports.BuildUtils = {
    clean: clean_1.clean,
    copy: copy_1.copy,
    echo: echo_1.echo,
    exec: exec_1.exec,
    npmPublish: npmPublish_1.npmPublish,
    prettierJS: prettier_1.prettierJS,
    prettierTS: prettier_1.prettierTS,
    removeModuleAlias: removeModuleAlias_1.removeModuleAlias,
    tsc: tsc_1.tsc,
    processPackage: processPackage_1.processPackage,
    zip: zip_1.zip
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUFxQztBQUNyQyx1Q0FBbUM7QUFDbkMsdUNBQW1DO0FBQ25DLHVDQUFtQztBQUNuQyxtREFBK0M7QUFDL0MsK0NBQXlEO0FBQ3pELGlFQUE2RDtBQUM3RCxxQ0FBaUM7QUFDakMsMkRBQXVEO0FBQ3ZELHFDQUFpQztBQUVwQixRQUFBLFVBQVUsR0FBRztJQUN6QixLQUFLLEVBQUUsYUFBSztJQUNaLElBQUksRUFBRSxXQUFJO0lBQ1YsSUFBSSxFQUFFLFdBQUk7SUFDVixJQUFJLEVBQUUsV0FBSTtJQUNWLFVBQVUsRUFBRSx1QkFBVTtJQUN0QixVQUFVLEVBQUUscUJBQVU7SUFDdEIsVUFBVSxFQUFFLHFCQUFVO0lBQ3RCLGlCQUFpQixFQUFFLHFDQUFpQjtJQUNwQyxHQUFHLEVBQUUsU0FBRztJQUNSLGNBQWMsRUFBRSwrQkFBYztJQUM5QixHQUFHLEVBQUUsU0FBRztDQUNSLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbGVhbiB9IGZyb20gJy4vdXRpbHMvY2xlYW4nXG5pbXBvcnQgeyBjb3B5IH0gZnJvbSAnLi91dGlscy9jb3B5J1xuaW1wb3J0IHsgZWNobyB9IGZyb20gJy4vdXRpbHMvZWNobydcbmltcG9ydCB7IGV4ZWMgfSBmcm9tICcuL3V0aWxzL2V4ZWMnXG5pbXBvcnQgeyBucG1QdWJsaXNoIH0gZnJvbSAnLi91dGlscy9ucG1QdWJsaXNoJ1xuaW1wb3J0IHsgcHJldHRpZXJKUywgcHJldHRpZXJUUyB9IGZyb20gJy4vdXRpbHMvcHJldHRpZXInXG5pbXBvcnQgeyByZW1vdmVNb2R1bGVBbGlhcyB9IGZyb20gJy4vdXRpbHMvcmVtb3ZlTW9kdWxlQWxpYXMnXG5pbXBvcnQgeyB0c2MgfSBmcm9tICcuL3V0aWxzL3RzYydcbmltcG9ydCB7IHByb2Nlc3NQYWNrYWdlIH0gZnJvbSAnLi91dGlscy9wcm9jZXNzUGFja2FnZSdcbmltcG9ydCB7IHppcCB9IGZyb20gJy4vdXRpbHMvemlwJ1xuXG5leHBvcnQgY29uc3QgQnVpbGRVdGlscyA9IHtcblx0Y2xlYW46IGNsZWFuLFxuXHRjb3B5OiBjb3B5LFxuXHRlY2hvOiBlY2hvLFxuXHRleGVjOiBleGVjLFxuXHRucG1QdWJsaXNoOiBucG1QdWJsaXNoLFxuXHRwcmV0dGllckpTOiBwcmV0dGllckpTLFxuXHRwcmV0dGllclRTOiBwcmV0dGllclRTLFxuXHRyZW1vdmVNb2R1bGVBbGlhczogcmVtb3ZlTW9kdWxlQWxpYXMsXG5cdHRzYzogdHNjLFxuXHRwcm9jZXNzUGFja2FnZTogcHJvY2Vzc1BhY2thZ2UsXG5cdHppcDogemlwXG59XG4iXX0=