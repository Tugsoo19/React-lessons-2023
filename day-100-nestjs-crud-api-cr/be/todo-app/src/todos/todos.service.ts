import { BadGatewayException, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from 'src/models/todo.model';
import { Model } from 'mongoose';



@Injectable()
export class TodosService {
  constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo>) { }



  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    if (createTodoDto.title === '') {
      throw new BadGatewayException("Title is required")
    }
    const newTodo = new this.todoModel(createTodoDto);

    const result = newTodo.save({})

    return result
  }

  async findAll() {
    const result = await this.todoModel.find({})
    return result
  }

  findOne(id: string): Promise<Todo> {
    const result = this.todoModel.findById(id);

    return result
  }

  update(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo> {

    const result = this.todoModel.findByIdAndUpdate(id, updateTodoDto, { new: true });

    return result
  }

  remove(id: string): Promise<Todo> {

    const result = this.todoModel.findByIdAndDelete({ _id: id });
    return result
  }
}
// function Injectable() {
//   throw new Error('Function not implemented.');
// }

