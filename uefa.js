
function TeamsMapView (domID) {
  if (! (this instanceof arguments.callee)) {
    return new arguments.callee(arguments);
  }
  
  var self = this;

  self.init = function() {
    self.domID = domID;
  };

  self.draw = function () {
    $('#' + self.domID).empty();
    var img = new Image();
    $(img).load(function () {
            $(this).hide(); 
            $('#' + self.domID).append(this); 
            $(this).attr('z-index', -1);
            $(this).fadeIn();
          })
          .attr('src', 'images/teams_detail.jpg');
  };

  self.init();
};

function DatesView (domID) {
  if(! (this instanceof arguments.callee)) {
    return new arguments.callee(arguments);
  }
  var self = this;
  
  self.init = function () {
    self.domID = domID;
  };

  self.draw = function () {
    $('#' + self.domID).empty();
    var img = new Image();
    $(img).load(function () {
            $(this).hide(); 
            $('#' + self.domID).append(this); 
            $(this).attr('z-index', -1);
            $(this).fadeIn();
          })
          .attr('src', 'images/dates_detail.jpg');
  };

  self.init();
}

function LocationsView (domID) {
  if(! (this instanceof arguments.callee)) {
    return new arguments.callee(arguments);
  }

  var self = this;

  self.init = function () {
    self.domID = domID;
  };

  self.draw = function () {
    $('#' + self.domID).empty();
    var img = new Image();
    $(img).load(function () {
            $(this).hide(); 
            $('#' + self.domID).append(this); 
            $(this).attr('z-index', -1);
            $(this).fadeIn();
          })
          .attr('src', 'images/locations_detail.jpg');
  };
  self.init();
}

function RoundsView (domID) {
  if(! (this instanceof arguments.callee)) {
    return new arguments.callee(arguments);
  }
  
  var self = this;

  self.init = function () {
    self.domID = domID;
  };

  self.draw = function () {
    $('#' + self.domID).empty();
    var img = new Image();
    $(img).load(function () {
            $(this).hide(); 
            $('#' + self.domID).append(this); 
            $(this).attr('z-index', -1);
            $(this).fadeIn();
          })
          .attr('src', 'images/rounds_detail.jpg');
  };

  self.init();
}

function LocationView (domID) {
  if(! (this instanceof arguments.callee)) {
    return new arguments.callee(arguments);
  }
  var self = this;
  self.init = function () {
    self.domID = domID;
  };

  self.draw = function () {
    $('#' + self.domID).empty();
    var img = new Image();
    $(img).load(function () {
            $(this).hide(); 
            $('#' + self.domID).append(this); 
            $(this).attr('z-index', -1);
            $(this).fadeIn();
          })
          .attr('src', 'images/4_games_detail.jpg');
  };

  self.init();
}

function TeamView (domID, team, matches) {
  if (! (this instanceof arguments.callee)) {
    return new arguments.callee(arguments);
  }
  var self = this;
  self.init = function () {
    self.domID = domID;
    self.team = team;
    self.matches = matches;

    console.log(self);
  };
  self.draw = function () {
    var container = $('#' + self.domID);
    container.empty();
    container.hide();
    var wrapper = $('<div></div>').appendTo('#' + self.domID);
    wrapper.addClass('games_' + _.size(matches));
    var content = $('#match_listitem').tmpl(self.matches);
    wrapper.append(content);

    container.fadeIn();

    /*var img = new Image();
    $(img).load(function () {
            $(this).hide(); 
            $('#' + self.domID).append(this); 
            $(this).attr('z-index', -1);
            $(this).fadeIn();
          })
          .attr('src', 'images/' + _.size(matches) + '_games_detail.jpg');*/
  };

  self.init();
};

function DateView (domID) {
  if (! (this instanceof arguments.callee)) {
    return new arguments.callee(arguments);
  }
  var self = this;
  self.init = function () {
    self.domID = domID;
  };

  self.draw = function () {
    $('#' + self.domID).empty();
    var img = new Image();
    $(img).load(function () {
            $(this).hide(); 
            $('#' + self.domID).append(this); 
            $(this).attr('z-index', -1);
            $(this).fadeIn();
          })
          .attr('src', 'images/6_games_detail.jpg');

  };

  self.init();
};

function RoundView (domID) {
  if (! (this instanceof arguments.callee)) {
    return new arguments.callee(arguments);
  }
  var self = this;
  self.init = function () {
    self.domID = domID;
  };
  self.draw = function () {
    $('#' + self.domID).empty();
    var img = new Image();
    $(img).load(function () {
            $(this).hide(); 
            $('#' + self.domID).append(this); 
            $(this).attr('z-index', -1);
            $(this).fadeIn();
          })
          .attr('src', 'images/4_games_detail.jpg');
  };
  self.init();
}


function MatchesModel (data) {
  if (! (this instanceof arguments.callee)) {
    return new arguments.callee(arguments);
  }

  var self = this;
  self.init = function () {
    self.data = data;
  };
  self.getTeams = function () {
    return self.data.teams;
  };
  self.getRounds = function () {
    var rounds = self.data.groups;
    rounds.push({ id: 'vf', name: 'Viertelfinale'});
    rounds.push({ id: 'hf', name: 'Halbfinale'});
    rounds.push({ id: 'f', name: 'Finale'});
    return rounds;
  };

  self.getMatchDays = function () {
    var days = [];
    for (var i in self.data.matches) {
      if (self.data.matches.hasOwnProperty(i)) {
        days.push({id: i, name: i, matches: self.data.matches[i]});
      }
    }
    return days;
  };
  self.getLocations = function () {
    return self.data.locations;
  };

  self.getMatchesByTeam = function (teamID) {
    var group = self.getGroupByTeam(teamID);
    var groupIdentifier = group.id.substring(1) + (_.indexOf(group.members, teamID) + 1);
    var matches = [];
    _.each(self.data.matches, function (matchday, date) {
      _.each(matchday, function (match) {
        if (match.team_1 === groupIdentifier || match.team_2 === groupIdentifier) {
          match.team_1_data = self.getTeamByGroupIdentifier(match.team_1);
          match.team_2_data = self.getTeamByGroupIdentifier(match.team_2);
          match.location_data = self.getLocationByID(match.location);
          matches.push(match);
        }
      });
    });
    return matches;
  };
  self.getTeamByGroupIdentifier = function (identifier) {
    var groupID = 'g' + identifier.substring(0,1);
    var teamIndex = identifier.substring(1);
    for (var i in self.data.groups) {
      var group = self.data.groups[i];
      if(group.id === groupID) {
        return self.getTeamByID(group.members[teamIndex - 1]);
      }
    };
    return false;
  };
  self.getTeamByID = function (id) {
    for (var i in self.data.teams) {
      var team = self.data.teams[i];
      if (team.id === id) {
        return team;
      }
    }
    return false;
  };
  self.getLocationByID = function (id) {
    for (var i in self.data.locations) {
      var location = self.data.locations[i];
      if(location.id === id) {
        return location;
      }
    }
    return false;
  };
  self.getGroupByTeam = function (teamID) {
    for (var i in self.data.groups) {
      var group = self.data.groups[i];
      if (typeof group.members !== "undefined") {
        var quicksearch = '|' + group.members.join('|') + '|';
        if (quicksearch.indexOf('|' + teamID + '|') > -1) {
          return group;
        }
      }
    }
    return false;
  };

  self.init();
};

function Stadion (domID, data, width, height) {
  if(! (this instanceof arguments.callee)) {
    return new arguments.callee(arguments);
  }

  var self = this;
  
  self.init = function () {
    self.paper = Raphael(domID, width, height);
    self.model = new MatchesModel(data);
    self.labelItemSegmentAttr = {
        'stroke-width': 0,
        'fill': '#FFFFFF',
        'fill-opacity': 1,
        'cursor': 'pointer'
      };
    self.labelItemLabelAttr = {
        'fill': '#333333',
        'font-size': 12,
        'font-family': 'sans-serif',
        'text-anchor': 'start',
        'font-weight': 'bold',
        'cursor': 'pointer'
      };
    self.itemSegmentAttr = {
        'stroke-width': 0,
        'fill': '#FFFFFF',
        'fill-opacity': 0.6,
        'cursor': 'pointer'
      };
    self.itemLabelAttr = {
        'fill': '#333333',
        'font-size': 12,
        'font-family': 'sans-serif',
        'text-anchor': 'start',
        'font-weight': 'bold',
        'cursor': 'pointer'
      };
    self.draw();
  };

  self.draw = function () {
    self.drawTeams(self.model.getTeams());
    self.drawRounds(self.model.getRounds());
    self.drawDates(self.model.getMatchDays());
    self.drawLocations(self.model.getLocations());
    self.drawBottom();
  };


  self.onClickTeamsLabel = function () {
    var teamsMapView = new TeamsMapView('details');
    teamsMapView.draw();
  };
  self.onClickLocationsLabel = function () {
    var view = new LocationsView('details');
    view.draw();
  };

  self.onClickDatesLabel = function () {
    var view = new DatesView('details');
    view.draw();
  };
  self.onClickRoundsLabel = function () {
    var view = new RoundsView('details');
    view.draw();
  };

  self.onClickLocation = function () {
    console.log(this.data("item"));
    var view = new LocationView('details');
    view.draw();
  };
  self.onClickTeam = function () {
    var team, matches, view;
    team = this.data("item");
    matches = self.model.getMatchesByTeam(team.id);
    view = new TeamView('details', team, matches);
    view.draw();
  };
  self.onClickDate = function () {
    console.log(this.data("item"));
    var view = new DateView('details');
    view.draw();
  };
  self.onClickRound = function () {
    console.log(this.data("item"));
    var view = new RoundView('details');
    view.draw();
  };


  self.drawBottom = function () {
    var segment;
    segment = self.paper.path(bottom_path);
    segment.attr(self.itemSegmentAttr);
  };
  self.drawTeams = function (teamData) {
    self.drawItemAndLabel(teams_paths[0], { name: "TEILNEHMER"}, self.labelItemSegmentAttr, self.labelItemLabelAttr, self.onClickTeamsLabel);
    $(teamData).each(function (i, item) {
      self.drawItemAndLabel(teams_paths[i + 1], item, self.itemSegmentAttr, self.itemLabelAttr, self.onClickTeam);
    });
  };
  self.drawRounds = function (roundData) {
    self.drawItemAndLabel(rounds_paths[0], { name: "RUNDEN" }, self.labelItemSegmentAttr, self.labelItemLabelAttr, self.onClickRoundsLabel);
    $(roundData).each(function (i, item) {
      self.drawItemAndLabel(rounds_paths[i + 1], item, self.itemSegmentAttr, self.itemLabelAttr, self.onClickRound);
    });
  };
  self.drawDates = function (datesData) {
    self.drawItemAndLabel(matches_paths[0], { name: "TERMINE" }, self.labelItemSegmentAttr, self.labelItemLabelAttr, self.onClickDatesLabel);
    $(datesData).each(function (i, item) {
      self.drawItemAndLabel(matches_paths[i + 1], item, self.itemSegmentAttr, self.itemLabelAttr, self.onClickDate);
    });
  };
  self.drawLocations = function (locationData) {
    self.drawItemAndLabel(locations_paths[0], { name: "SPIELORTE" }, self.labelItemSegmentAttr, self.labelItemLabelAttr, self.onClickLocationsLabel);
    $(locationData).each(function (i, item) {
      self.drawLocationItemAndLabel(locations_paths[i + 1], item, self.itemSegmentAttr, self.itemLabelAttr, self.onClickLocation);
    });
  };

  self.drawLocationItemAndLabel = function (segmentItem, item, segmentFormat, labelFormat, onclick) {
    var segment, label, lx, ly, flag_1, flag_2;
      segment = self.paper.path(segmentItem.path);
      segment.attr(segmentFormat);
     
      flag_1 = self.paper.path(segmentItem.flag_1);
      flag_1.attr({
        'stroke-width': 0,
        'fill': (item.country === "POL") ? "#AC0F32" : "#4A6CAE",
        'fill-opacity': 1.0
      })
      flag_2 = self.paper.path(segmentItem.flag_2);
      flag_2.attr({
        'stroke-width': 0,
        'fill': (item.country === "POL") ? "#E7E7E7" : "#E8D63A", //"#E7E7E7",
        'fill-opacity': 1.0
      });

      lx = segment.getBBox().x + segmentItem.lxoffset;
      ly = segment.getBBox().y + segmentItem.lyoffset;
      label = self.paper.text(lx, ly, item.name);
      label.attr(labelFormat);
      label.rotate(segmentItem.angle);

      hoverFunc = function () {
        segment.animate({'fill-opacity': 1.0}, 200, 'bounce');
      };
      hideFunc = function () {
        segment.animate({'fill-opacity': segmentFormat['fill-opacity']}, 200, 'bounce');
      };

      $(segment.node).hover(hoverFunc, hideFunc);
      $(label.node).hover(hoverFunc, hideFunc);

      //assign clickhandler
      segment.click(onclick);
      label.click(onclick);

      segment.data('item', item);
      label.data('item', item);

  };
  self.drawItemAndLabel = function (segmentItem, item, segmentFormat, labelFormat, onclick) {
    var segment, label, lx, ly;
      segment = self.paper.path(segmentItem.path);
      segment.attr(segmentFormat);

      lx = segment.getBBox().x + segmentItem.lxoffset;
      ly = segment.getBBox().y + segmentItem.lyoffset;
      label = self.paper.text(lx, ly, item.name);
      label.attr(labelFormat);
      label.rotate(segmentItem.angle);

      hoverFunc = function () {
        segment.animate({'fill-opacity': 1.0}, 200, 'bounce');
      };
      hideFunc = function () {
        segment.animate({'fill-opacity': segmentFormat['fill-opacity']}, 200, 'bounce');
      };

      $(segment.node).hover(hoverFunc, hideFunc);
      $(label.node).hover(hoverFunc, hideFunc);

      //assign clickhandler
      segment.click(onclick);
      label.click(onclick);
      
      segment.data('item', item);
      label.data('item', item);

  };
  
  self.init();
};



$(function () {
  var r = new Stadion("stage", data, 941, 531);
});
