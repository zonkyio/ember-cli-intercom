/* jshint node: true */
'use strict';

var filterInitializers = require('fastboot-filter-initializers');

module.exports = {
  name: 'ember-cli-intercom',

  contentFor: function(type, config) {
    if (type === 'body') {
      let id = config['ember-cli-intercom'].appId;
      return `
        <script src="https://widget.intercom.io/widget/${id}" defer></script>
      `;
    }
  },

  preconcatTree: function(tree) {
    return filterInitializers(tree, this.app.name);
  }
};
