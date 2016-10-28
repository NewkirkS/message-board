import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer() {
      var params = {
        author: this.get('author'),
        date: this.get('date'),
        content: this.get('content'),
        question: this.get('question')
      };
      this.sendAction('saveAnswer', params);
      this.set('author', '');
      this.set('date', '');
      this.set('content', '');
    }
  }
});
