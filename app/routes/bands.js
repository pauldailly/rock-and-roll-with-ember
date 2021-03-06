import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin,{
  model() {
    return this.store.findAll('band');
  },

  actions: {
    didTransition() {
      window.document.title = 'Bands - Rock & Roll';
    },
  }
});