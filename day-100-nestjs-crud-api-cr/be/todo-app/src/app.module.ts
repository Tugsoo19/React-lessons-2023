import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { MongooseModule } from "@nestjs/mongoose"

@Module({
  imports: [TodosModule,
    MongooseModule.forRoot('mongodb+srv://tugsoo:bunny%401928@mongodb-tugsoo.a6x20yd.mongodb.net/test')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
