import CoreApi from '../CoreApi';
import config from '../../config';

class PlaceholderApiProvider extends CoreApi {
  constructor(endpoint) {
    super(config.placeholderApiUrl, endpoint);
  }
}

export default PlaceholderApiProvider;
