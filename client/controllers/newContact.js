Template.newContact.events({
  "click #addBTN": function(){

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
                        latitude:Session.get("latitude")});
      Router.go("/detailContact");
    }, //END ADDBTN

  "click #latitude": function(){
      document.getElementById("#latitude").value = Session.get("latitude");
  },


  "click #cancelBTN": function(){
    Router.go('/');
  },
});

Template.newContact.helpers({
  lat:function(){ return Session.get("latitude"); },
  long:function(){ return Session.get("longitude"); }
});


//Gets the position where the user is now
findUser = function(){
  navigator.geolocation.getCurrentPosition(GetLocation);
  function GetLocation(location) {
      Session.set("latitude", location.coords.latitude);
      Session.set("longitude", location.coords.longitude);
  }
};
