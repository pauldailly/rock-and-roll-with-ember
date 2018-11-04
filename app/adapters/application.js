import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

import { inject as service } from '@ember/service';
import { isPresent } from '@ember/utils';

const { JSONAPIAdapter } = DS;

export default JSONAPIAdapter.extend(DataAdapterMixin, {
  session: service(),
  authorize(xhr) {
    let { token: access_token } = this.get('session.data.authenticated');
    if (isPresent(access_token)) {
      xhr.setRequestHeader('Authorization', `Bearer ${access_token}`);
    }
  }
});