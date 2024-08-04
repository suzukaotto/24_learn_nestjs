import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({}),
      dataSourceFactory: () =>
        new DataSource({
          type: 'mysql',
          host: '146.56.161.10',
          port: 12189,
          username: 'dyhs',
          password: 'dyhs0511',
          database: 'dyhs-study',
          entities: [User],
          synchronize: true,
        }).initialize(),
    }),
  ],
})
export class DatabaseModule {}
