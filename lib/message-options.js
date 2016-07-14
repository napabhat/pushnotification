module.exports = {
    collapseKey: {
        __argName: "collapse_key",
        __argType: "string"
    },
    priority: {
        __argType: "string"
    },
    contentAvailable: {
        __argName: "content_available",
        __argType: "boolean"
    },
    delayWhileIdle: {
        __argName: "delay_while_idle",
        __argType: "boolean"
    },
    timeToLive: {
        __argName: "time_to_live",
        __argType: "number"
    },
    restrictedPackageName: {
        __argName: "restricted_package_name",
        __argType: "string"
    },
    dryRun: {
        __argName: "dry_run",
        __argType: "boolean"
    },
    data: {
        __argType: "object"
    },
    notification: {
        __argType: "object"
        //TODO: There are a lot of very specific arguments that could
        //      be indicated here.
    }
};