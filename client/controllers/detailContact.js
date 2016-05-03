Meteor.startup(function(){
  GoogleMaps.load();
});


Template.detailContact.helpers({
  firstName:function(){
    return Session.get("firstName");
  },
  lastName:function(){
    return Session.get("lastName");
  },
  phoneNumber:function(){
    return Session.get("phoneNumber");
  },
  gender:function(){
    return Session.get("gender");
  },
  email:function(){
    return Session.get("email");
  },
  lat:function(){
    return Session.get("latitude");
  },
  long:function(){
    return Session.get("longitude");
  },
  id:function(){
    return Session.get("id");
  },

  mapOptions:function(){

    if(GoogleMaps.loaded())
    {
      return{
        center:new google.maps.LatLng(Session.get("latitude"),Session.get("longitude")),
        zoom:12
      };
    }
  }
});

Template.detailContact.onCreated(function(){
  GoogleMaps.ready("map",function(map){
    var marker = new google.maps.Marker({
      position: map.options.center,
      map:map.instance,
    });
  });
});

Template.detailContact.events({
  'click #backToContactList':function(event,template){
    Router.go('/');
  },

  'click #deleteButton':function(event,template){
    contacts.remove({_id:Session.get("id")});
    Router.go('/');
  },

  'click #editButton':function(event,template){
    Router.go('/updateContact');
  }
});
