import { Controller, Get } from '@nestjs/common';
import { Category } from '@app/db/model/category.model';
import { InjectModel } from 'nestjs-typegoose';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud';

@Crud({
    model:Category
})

@Controller('category')
@ApiTags('分类')
export class CategoryController {
    constructor(@InjectModel(Category) private readonly model){}
    @Get('a')
    @ApiOperation({ summary:'关联取出' })
    async index(){
        return await this.model.find().populate('video').lean()
    }
}
