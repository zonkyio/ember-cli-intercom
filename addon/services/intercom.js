import Ember from 'ember';

const { getOwner, inject: { service }} = Ember;

export default Ember.Service.extend({

  fastboot: service(),

  boot(params = {}) {
    if (this.get('fastboot.isFastBoot')) { return; }
    let config = getOwner(this)._lookupFactory('config:environment');
    params['app_id'] = config['ember-cli-intercom'].appId;
    window.Intercom('boot', params);
  },

  update(params) {
    if (this.get('fastboot.isFastBoot')) { return; }
    window.Intercom('update', params);
  },

  shutdown() {
    if (this.get('fastboot.isFastBoot')) { return; }
    window.Intercom('shutdown');
  },

  hide() {
    if (this.get('fastboot.isFastBoot')) { return; }
    window.Intercom('hide');
  },

  show() {
    if (this.get('fastboot.isFastBoot')) { return; }
    window.Intercom('show');
  },

  showMessages() {
    if (this.get('fastboot.isFastBoot')) { return; }
    window.Intercom('showMessages');
  },

  showNewMessage(text) {
    if (this.get('fastboot.isFastBoot')) { return; }

    if (text) {
      window.Intercom('showNewMessage', text);
    } else {
      window.Intercom('showNewMessage');
    }
  },

  trackEvent(eventName, params) {
    if (this.get('fastboot.isFastBoot')) { return; }
    window.Intercom('trackEvent', eventName, params);
  }
});
