(function () {
    "use strict";

    var Utils = require('./utils');

    class QueryCommand {
        constructor(db) {
            this.db = db;
            this.sql = '';
        }

        run(messages, writer, sql) {
            messages._setsql(sql);
            return Utils.runQuery(messages, writer, this.db.query.bind(this.db, sql));
        }
    }

    module.exports = exports = QueryCommand;

} ());
