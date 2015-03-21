ContactManager.module("Entities", function(Entities, ContactManager, Backbone, Marionette, $, _){
  var alertPrivate = function(message){
    alert("private alert: " + message);
  };

  Entities.alertPublic = function(message){
    alert("I will now call alertPrivate");
    alertPrivate(message)
  }

});