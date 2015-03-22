var ContactManager = new Marionette.Application();

ContactManager.addRegions({
  mainRegion: "#main-region"
});

ContactManager.on("start", function(){
  ContactManager.ContactsApp.List.Controller.listContacts();
});

ContactManager.on("start", function(){
  if(Backbone.history){
    Backbone.history.start();
  }
});
