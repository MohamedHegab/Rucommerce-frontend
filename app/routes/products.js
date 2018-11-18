import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.query('product', { params});
  },
  queryParams: {
    page: {
      refreshModel: true
    },
    size: {
      refreshModel: true
    }
  }
});
