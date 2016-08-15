/* jshint node: true */
'use strict';

var filterInitializers = require('fastboot-filter-initializers');

module.exports = {
  name: 'ember-cli-intercom',

  contentFor: function(type, config) {
    if (type === 'body') {
      var content = '';

      content += "<script>if (typeof Storage !== 'undefined' && sessionStorage) { try { sessionStorage.setItem('intercom.welcome.animated', true); } catch (e) { } /* do not care about Safari error in private mode */ }</script>";
      content += "<script>(function(){var w=window;var ic=w.Intercom;if(typeof ic==='function'){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/" + config['ember-cli-intercom'].appId + "';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()</script>";

      return content;
    }
  },

  preconcatTree: function(tree) {
    return filterInitializers(tree, this.app.name);
  }
};
