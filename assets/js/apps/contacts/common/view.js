ContactManager.module("ContactsApp.Common.Views", function(Views, ContactManager, Backbone, Marionette, $, _){
  Views.Form = Marionette.ItemView.extend({
    template: "#contact-form",

    events: {
      "click button,js-submit": "submitClicked"
    },

    submitClicked: function(e){
      e.preventDefault();
      var data = Backbone.Syphon.serialize(this);
      this.trigger("form:submit", data);
    },

    onRender: function(){
      if( ! this.options)
    }
  })
});