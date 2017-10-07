import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  actions: {
    saveInvitation() {
      alert(`Saving of thr following email address in progress: ${this.get('emailAddress')}`);
      this.set('responseMessage', `Thanks you! We've just saved you email address: ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
    }
  },
});
