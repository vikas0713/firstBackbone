var tag="{{#each models}}{{# each attributes.fixtures}}<div class='row'><div class='col-md-12' ><h3><b>{{firstTeamName}}</b> vs <b>{{secondTeamName}}</b></h3></div></div><div class='row'><div class='col-md-5' ><img src='{{firstTeamLogo}}'></div><div class='col-md-2'><h4><code>Match # :{{matchNumber}}</code><br>{{matchDate}} at <b>{{matchLocationName}}</b> in <b>{{stadiumName}}</b> Stadium, Australia</h4></div><div  class='col-md-5' ><img src='{{secondTeamLogo}}'></div></div>{{/each}}{{/each}}";

var teamTag="<div class='row'>{{#each models}}{{#each attributes.fixtures}}<div class='col-md-3'>"+
    "<img src='{{firstTeamLogo}}'/><h4>{{firstTeamName}}</h4></div>"+
    "<div class='col-md-3'><img src='{{secondTeamLogo}}'/><h4>{{secondTeamName}}</h4></div>{{/each}}{{/each}} </div>";
    

var timing= "<div class='row'>{{# each models}}{{# each attributes.fixtures}}<div class='col-md-4'>"+
    "<h3>Match Number: {{matchNumber}}</h3><h3>Match Timing: {{matchDate}}</h3></div>{{/each}}{{/each}}"+
    "</div>";



AllViews=[tag, teamTag, timing];
var MyView = Backbone.View.extend({
    template: Handlebars.compile(AllViews[0]),
    initialize: function(){
     this.listenTo(this.collection, "reset", this.render);
    },
    render: function(){
        this.$el.html(this.template(this.collection));
        return this;
    }
  });


var MySecondView = Backbone.View.extend({
    template: Handlebars.compile(AllViews[1]),
    initialize: function(){
     this.listenTo(this.collection, "reset", this.render);
    },
    render: function(){
        this.$el.html(this.template(this.collection));
        return this;
    }
  });

var MyTimingView= Backbone.View.extend({
    template: Handlebars.compile(AllViews[2]),
    initialize:function(){
      this.listenTo(this.collection, "reset", this.render);
    },
    render: function(){
        this.$el.html(this.template(this.collection));
        return this;
    }
    
});

