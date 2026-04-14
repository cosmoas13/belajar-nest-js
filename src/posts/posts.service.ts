import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  private posts = [
    { id: 1, title: 'Post pertama' },
    { id: 2, title: 'Post kedua' },
  ];

  findAll() {
    return this.posts;
  }

  findOne(id: number) {
    return this.posts.find((p) => p.id === id);
  }

  create(title: string) {
    const newPost = {
      id: this.posts.length + 1,
      title,
    };
    this.posts.push(newPost);
    return newPost;
  }

  update(id: number, data: { title?: string }) {
    const post = this.posts.find((p) => p.id === id);

    if (!post) {
      return { message: 'Post not found' };
    }

    if (data.title !== undefined) {
      post.title = data.title;
    }

    return post;
  }

  delete(id: number) {
    this.posts = this.posts.filter((p) => p.id !== id);
    return { message: 'Deleted' };
  }
}
