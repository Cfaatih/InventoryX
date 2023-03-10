import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from '../user/entities/user.entity';

export default class TypeOrmConfig {
    static getOrmConfig(configService: ConfigService) : TypeOrmModuleOptions {
       return {
            type: 'mysql',
            host: configService.get('DB_HOST'),
            port: configService.get('DB_PORT'),
            username: configService.get('DB_USERNAME'),
            password: configService.get('DB_PASSWORD'),
            database: configService.get('DB_NAME'),
            //entities: [__dirname + '/../**/*.entity.{ts,js}'],
            entities: [User],
            synchronize: true,
       }
}
}

export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(configService),
    inject: [ConfigService]
}

// export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
//     useFactory: async (): Promise<TypeOrmModuleOptions> => {
//     return {
//             type: 'mysql',
//             host: process.env.DB_HOST,
//             port: parseInt(process.env.DB_PORT, 10),
//             username: process.env.DB_USERNAME,
//             password: process.env.DB_PASSWORD,
//             database: process.env.DB_NAME,
//             //entities: [__dirname + '/../**/*.entity.{ts,js}'],
//             entities: [User],
//             migrationsTableName: "migrations",
//             migrations: ["src/migrations/*.ts"],
//             cli: {
//             "migrationsDir": "src/migrations",
//            },
//             synchronize: true,
//         }
//     }
// }
//
// // @ts-ignore
// export const typeOrmConfig: TypeOrmModuleOptions = {
//         type: 'mysql',
//         host: process.env.DB_HOST,
//         port: parseInt(process.env.DB_PORT, 10),
//         username: process.env.DB_USERNAME,
//         password: process.env.DB_PASSWORD,
//         database: process.env.DB_NAME,
//         //entities: [__dirname + '/../**/*.entity.{ts,js}'],
//         entities: [User],
//         migrationsTableName: "migrations",
//         migrations: ["src/migrations/*.ts"],
//         cli: {
//             "migrationsDir": "src/migrations",
//         },
//         logging: true
// }
