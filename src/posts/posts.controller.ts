import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';

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
    create(@Body() body: { title: string }) {
        return this.postService.create(body.title);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.postService.delete(Number(id));
    }
}
