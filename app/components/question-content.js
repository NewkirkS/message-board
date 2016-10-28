import Ember from 'ember';

export default Ember.Component.extend({
  updateActive: false,
  actions: {
    showUpdateForm(){
      this.set("updateActive", true);
    }
  }
});
