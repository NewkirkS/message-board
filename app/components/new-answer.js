import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer() {
      var params = {
        answerauthor: this.get('answerauthor'),
        answerdate: this.get('answerdate'),
        content: this.get('content'),
        question: this.get('question')
      };
      this.sendAction('saveAnswer', params);
      this.set('answerauthor', '');
      this.set('answerdate', '');
      this.set('content', '');
    }
  }
});
