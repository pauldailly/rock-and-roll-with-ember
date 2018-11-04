import Controller from '@ember/controller';
import { getWithDefault } from '@ember/object';
import { computed } from '@ember/object';

export default Controller.extend({
  showErrors: computed('_showErrors', function () {
    return getWithDefault(this, '_showErrors', {
      email: false,
      password: false
    });
  }),

  actions: {
    async signUp(event) {
      event.preventDefault();
      try {
        await this.get('model').save();
        await this.transitionToRoute('login');
      } catch (response) {
        let error = response.errors[0];
        if (error.status !== "422") {
          throw response;
        }
      }
    }
  }
});