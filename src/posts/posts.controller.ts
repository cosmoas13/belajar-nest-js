import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostsController {
    constructor(private postService: PostsService) {}

    @Get()
    getAll() {
        return this.postService.findAll();
    }

    @Get(':id')
    getOne(@Param('id') id:string) {
        return this.postService.findOne(Number(id));
    }

    @Post()
    create(@Body() body: CreatePostDto) {
        return this.postService.create(body.title ?? "");
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() body: UpdatePostDto,
    ) {
        return this.postService.update(Number(id), body)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.postService.delete(Number(id));
    }
}
