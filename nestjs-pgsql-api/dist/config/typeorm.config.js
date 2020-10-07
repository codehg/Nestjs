"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
exports.typeOrmConfig = {
    type: "postgres",
    host: "127.0.0.1",
    port: +5432,
    username: "pguser",
    password: "pgpassword",
    database: "nubank",
    entities: [__dirname + '/../**/*.entity.{js, ts}'],
    synchronize: true
};
//# sourceMappingURL=typeorm.config.js.map