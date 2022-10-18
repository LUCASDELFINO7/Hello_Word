import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Postagem } from './postagem/entities/postagem.entities';
import { PostagemModule } from './postagem/postagem.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'rootroot',   
      database: 'db_blogpessoal',
      entities: [Postagem],
      synchronize: true
    }),
    PostagemModule
  ],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
