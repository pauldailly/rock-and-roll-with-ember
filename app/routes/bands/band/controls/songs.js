import Route from '@ember/routing/route';
import wait from 'rarwe/utils/wait';

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

  async model() {
    await wait(2000);
    return this.modelFor('bands.band');
  },
});