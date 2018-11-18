import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['page', 'size'],
  page: 1,
  size: 10,

  actions: {
    filterByName(param) {
      if (param !== '') {
        return this.store.query('product', { name: param });
      } else {
        return this.store.findAll('product');
      }
    }
  }
});
