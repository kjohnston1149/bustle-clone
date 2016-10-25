import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  published: DS.attr(),
  image: DS.attr(),
  body: DS.attr()
});
