var MyRoute= Backbone.Router.extend({
  routes:{
       '':'index',
       'timing':'timing',
       'teams':'teams',
       
  },
    initialize:function(){
    this.myCollection=new MyCollection();
    this.myCollection.fetch();
        
    this.myView= new MyView({collection: this.myCollection});
    this.mySecondView= new MySecondView({collection:this.myCollection});
    this.myTiming=new MyTimingView({collection:this.myCollection});
 },
  index:function(){
      $('#app').html(this.myView.render().el);
 },
  timing:function(){
      $('#app').html(this.myTiming.render().el);
 },
 teams:function(){
      $('#app').html(this.mySecondView.render().el);
 },

});





var myRoute = new MyRoute();
$(function() {
	Backbone.history.start();
});
