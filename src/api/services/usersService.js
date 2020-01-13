
import PlaceholderApiProvider from '../serviceProviders/PlaceholderApiProvider';

class UsersService extends PlaceholderApiProvider {
  async getById(id) {
    return this.api.get(`/${id}`);
  }

}

const usersService = new UsersService('/users');

export default usersService;
