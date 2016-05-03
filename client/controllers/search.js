searchResults = [];
Session.set("searchRes", searchResults);


Template.search.helpers({
  result:function(){
    return Session.get("searchRes");
  }
});

Template.search.events({
  'click #backArrow':function(){
    Session.set("searchRes","");
    Router.go('/');
  },

  'click #searchB':function(){
    console.log("button pushed");
    findContact(document.getElementById('searchField').value);
  },
});

//Get contacts who matches the searchterm
function findContact(searchTerm){
  searchResults = [];

  var list = contacts.find().fetch();
  console.log(list);
  for(var i=0; i < list.length; i++)
  {
    obj = list[i];
    if(obj.firstname == searchTerm || obj.lastname === searchTerm || obj.gender === searchTerm || obj.email === searchTerm || obj.number === searchTerm || obj.latitude === searchTerm || obj.longitude === searchTerm)
    {
      searchResults.push(obj);
    }
  }
  Session.set("searchRes",searchResults);
}
