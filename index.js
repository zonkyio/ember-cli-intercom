/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-intercom',

  contentFor: function(type, config) {
    if (type === 'body') {
      let id = config['ember-cli-intercom'].appId;
      return `
        <script src="https://widget.intercom.io/widget/${id}" defer></script>
      `;
    }
  }
};
