import * as API from './'

export default {
  test: params => {
    return API.POST('/user/test')
  },
}

