import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  price: DS.attr(),
  department: DS.attr(),
  active_promotion: DS.attr(),
  discounted_price: DS.attr()
});
