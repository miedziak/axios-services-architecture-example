import PlaceholderApiProvider from '../serviceProviders/PlaceholderApiProvider';

class PostsService extends PlaceholderApiProvider {
  async getAll() {
    return this.api.get();
  }

  async getById(id) {
    return this.api.get(`/${id}`);
  }

  async getCommentsForPost(id) {
    return this.api.get(`/${id}/comments`);
  }

}

const postsService = new PostsService('/posts');

export default postsService;
