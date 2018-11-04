import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { buildValidations } from 'ember-cp-validations';
import emailFieldValidation from 'rarwe/validations/email-field';
import passwordFieldValidation from 'rarwe/validations/password-field';
import { computed, getWithDefault } from '@ember/object';

const Validations = buildValidations({
  email: emailFieldValidation,
  password: passwordFieldValidation
});

export default Controller.extend(Validations, {
  session: service(),
  showErrors: computed('_showErrors', function () {
    return getWithDefault(this, '_showErrors', {
      email: false,
      password: false
    });
  }),
  actions: {
    async signIn(event) {
      event.preventDefault();
      let { email, password } = this.getProperties('email', 'password');
      await this.get('session').authenticate('authenticator:credentials', email, password);
      await this.transitionToRoute('bands');
    }
  }
});