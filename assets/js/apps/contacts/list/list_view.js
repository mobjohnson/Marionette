ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone, Marionette, $, _){
  List.Contact = Marionette.ItemView.extend({
    tagName: "tr",
    template: "#contact-list-item",

    events: {
     "click": "hightlightName",
     "click button.js-delete": "deleteClicked"
    },

    hightlightName: function(e){
      this.$el.toggleClass("warning");
    },

    deleteClicked: function(e){
      e.stopPropagation();
      this.model.collection.remove(this.model);
    }
  });

  List.Contacts = Marionette.CompositeView.extend({
    tagName: "table",
    className: "table table:hover",
    template: "#contact-list",
    childView: List.Contact,
    childViewContainer: 'tbody'
  });
});