Template.updateContact.helpers({
  firstName:function(){ return Session.get("firstName"); },
  lastName:function(){ return Session.get("lastName"); },
  phoneNumber:function(){ return Session.get("phoneNumber"); },
  gender:function(){ return Session.get("gender"); },
  email:function(){ return Session.get("email"); },
  lat:function(){ return Session.get("latitude"); },
  long:function(){ return Session.get("longitude"); },
  id:function(){ return Session.get("id"); }
});

Template.updateContact.events({
 'click #editContact': function(event, template){
    contacts.remove({_id:Session.get("id")});
    Session.set("firstName", document.getElementById("firstName").value);
    Session.set("lastName", document.getElementById("lastName").value);
    Session.set("phoneNumber", document.getElementById("phoneNumber").value);
    Session.set("email", document.getElementById("email").value);
    Session.set("gender", document.getElementById("gender").value);
    Session.set("latitude", document.getElementById("latitude").value);
    Session.set("longitude", document.getElementById("longitude").value);
    contacts.insert({firstname: Session.get("firstName"),
                    lastname: Session.get("lastName"),
                    number: Session.get("phoneNumber"),
                    email: Session.get("email"),
                    gender: Session.get("gender"),
                    longitude: Session.get("longitude"),
                    latitude: Session.get("latitude")});

  Session.set("longitude","");
  Session.set("latitude","");
  Router.go('/');
},

  'click #backtoContacts':function(event,template){
    Router.go('/detailContact');
  }
});
