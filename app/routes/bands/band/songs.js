import Route from '@ember/routing/route';
import RSVP from "rsvp";

export default Route.extend({

  resetController(controller) {
    controller.setProperties({
      isAddingSong: false,
      newSongName: ''
    });
  },

  actions: {
    didTransition() {
      let band = this.modelFor('bands.band');
      document.title = `${band.get('name')} songs - Rock & Roll`;
    }
  },
  model() {
    return RSVP.reject(this.modelFor('bands.band'));
  },
});