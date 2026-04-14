import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
    private posts = [
        {id: 1, title: 'Post pertama'},
        {id: 2, title: 'Post kedua'},
    ];

    findAll() {
        return this.posts;
    }

    findOne(id: number) {
        return this.posts.find(p => p.id === id);
    }

    create(title: string) {
        const newPost = {
            id: this.posts.length +1,
            title,
        };
        this.posts.push(newPost);
        return newPost;
    }

    delete(id: number) {
        this.posts = this.posts.filter(p => p.id !== id);
        return { message: 'Deleted' };
    }
}
