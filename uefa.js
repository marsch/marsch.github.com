
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
          .attr('src', 'images/teams_detail.png');
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
          .attr('src', 'images/dates_detail.png');
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
          .attr('src', 'images/locations_detail.png');
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
          .attr('src', 'images/rounds_detail-dirty.png');
  };

  self.init();
}

function LocationView (domID, location, matches) {
  if(! (this instanceof arguments.callee)) {
    return new arguments.callee(arguments);
  }
  var self = this;
  self.init = function () {
    self.domID = domID;
    self.location = location;
    self.matches = matches;
  };

  self.draw = function () {
    var container = $('#' + self.domID);
    container.empty();
    container.hide();
    var title = $('<div>' + self.location.name + '</div>').appendTo('#' + self.domID);
    title.addClass('games_title');
    var wrapper = $('<div></div>').appendTo('#' + self.domID);
    wrapper.addClass('games_' + _.size(self.matches));
    var content = $('#match_listitem').tmpl(self.matches);
    wrapper.append(content);

    container.fadeIn();
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
    var title = $('<div>' + self.team.name + '</div>').appendTo('#' + self.domID);
    title.addClass('games_title');
    var wrapper = $('<div></div>').appendTo('#' + self.domID);
    wrapper.addClass('games_' + _.size(self.matches));
    var content = $('#match_listitem').tmpl(self.matches);
    wrapper.append(content);

    container.fadeIn();
  };
  self.init();
};

function DateView (domID, date, matches) {
  if (! (this instanceof arguments.callee)) {
    return new arguments.callee(arguments);
  }
  var self = this;
  self.init = function () {
    self.domID = domID;
    self.date = date;
    self.matches = matches;
    console.log(self);
  };

  self.draw = function () {
    var container = $('#' + self.domID);
    container.empty();
    container.hide();
    var title = $('<div>' + self.date.id + '</div>').appendTo('#' + self.domID);
    title.addClass('games_title');
    var wrapper = $('<div></div>').appendTo('#' + self.domID);
    wrapper.addClass('games_' + _.size(self.matches));
    var content = $('#match_listitem').tmpl(self.matches);
    wrapper.append(content);

    container.fadeIn();
  };
  self.init();
};

function RoundView (domID, round, matches) {
  if (! (this instanceof arguments.callee)) {
    return new arguments.callee(arguments);
  }
  var self = this;
  self.init = function () {
    self.domID = domID;
    self.round = round;
    self.matches = matches;
  };
  self.draw = function () {
    var container = $('#' + self.domID);
    container.empty();
    container.hide();

    var title = $('<div>' + self.round.name + '</div>').appendTo('#' + self.domID);
    title.addClass('games_title');

    var wrapper = $('<div></div>').appendTo('#' + self.domID);
    wrapper.addClass('games_' + _.size(self.matches));
    var content = $('#match_listitem').tmpl(self.matches);
    wrapper.append(content);
    container.fadeIn();

/*
    $('#' + self.domID).empty();
    var img = new Image();
    $(img).load(function () {
            $(this).hide(); 
            $('#' + self.domID).append(this); 
            $(this).attr('z-index', -1);
            $(this).fadeIn();
          })
          .attr('src', 'images/4_games_detail.jpg');*/
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
  self.getMatchesByRound = function (roundID) {
    var matches = [], groupIdentifier;  
    // viertelfinale 25-28
    if (roundID === "vf") {
      matches.push(self.getMatchByID(25));
      matches.push(self.getMatchByID(26));
      matches.push(self.getMatchByID(27));
      matches.push(self.getMatchByID(28));
    } else if (roundID === "hf") {
      // halbfinale 29-30
      matches.push(self.getMatchByID(29));
      matches.push(self.getMatchByID(30));
    } else if (roundID === "f") {
      // finale 31
      matches.push(self.getMatchByID(31));
    } else {
      //group phase
      groupIdentifier = roundID.substring(1);
      _.each(self.data.matches, function (matchday, date) {
        _.each(matchday, function (match) {
          if(match.team_1.substring(0,1) === groupIdentifier) {
            matches.push(match);
          }
        });
      });
    }
    _.each(matches, function (match) {
      match.team_1_data = self.getTeamByGroupIdentifier(match.team_1);
      match.team_2_data = self.getTeamByGroupIdentifier(match.team_2);
      match.location_data = self.getLocationByID(match.location);
    });
    return matches;
  };
  self.getMatchByID = function (matchID) {
    for (var i in self.data.matches) {
      var matchday = self.data.matches[i];
      for (var j in matchday) {
        var match = matchday[j];
        if (match.id === matchID) {
          return match;
        }
      }
    }
    return false;
  };
  self.getMatchesByDate = function (date) {
    if (!self.data.matches.hasOwnProperty(date)) {
      return false;
    }
    var matches = self.data.matches[date];
    _.each(matches, function (match) {
      match.team_1_data = self.getTeamByGroupIdentifier(match.team_1);
      match.team_2_data = self.getTeamByGroupIdentifier(match.team_2);
      match.location_data = self.getLocationByID(match.location);
    });
    return matches;
  };
  self.getMatchesByLocation = function (locationID) {
    var matches = [];
    _.each(self.data.matches, function (matchday, date) {
      _.each(matchday, function (match) {
        if (match.location === locationID) {
          match.team_1_data = self.getTeamByGroupIdentifier(match.team_1);
          match.team_2_data = self.getTeamByGroupIdentifier(match.team_2);
          match.location_data = self.getLocationByID(match.location);
          matches.push(match);
        }
      });
    });
    return matches;
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
    switch (identifier) {
      //viertelfinale
      case 'WA':
      case 'WB':
      case 'WC':
      case 'WD':
        var groupid = 'g' + identifier.substring(1).toLowerCase();
        return self.getGroupFirstTeam(groupid);
      case 'RB':
      case 'RA':
      case 'RD':
      case 'RC':
        var groupid = 'g' + identifier.substring(1).toLowerCase();
        return self.getGroupSecondTeam(groupid);
      //halbfinale
      case 'W25':
      case 'W27':
      case 'W26':
      case 'W28':
      case 'W29':
      case 'W30':
        var match_id = identifier.substring(1);
        return self.getWinnerTeamByMatchID(match_id);
      default: 
        var groupID = 'g' + identifier.substring(0,1);
        var teamIndex = identifier.substring(1);
        for (var i in self.data.groups) {
          var group = self.data.groups[i];
          if(group.id === groupID) {
            return self.getTeamByID(group.members[teamIndex - 1]);
          }
        };
    }
    return false;
  };

  self.getWinnerTeamByMatchID = function (match_id) {
  
  };

  self.getGroupFirstTeam = function (group_id) {
    // getMatchesByRound - look if every is closed
    // get the team with the most scores
    var matches = self.getMatchesByRound(group_id);
    var group = self.getGroupByID(group_id);
    var teams = {};
    _.each(matches, function (match, index) {
      if (!teams[match.team_1]) {
        teams[match.team_1] = 0;
      }
      if (!teams[match.team_2]) {
        teams[match.team_2] = 0;
      }
      if (match.isNV || match.isNE) {
        teams[match.team_1] += match.subscore.team_1;
        teams[match.team_2] += match.subscore.team_2;
      } else {
        teams[match.team_1] += match.score.team_1;
        teams[match.team_2] += match.score.team_2;
      }
    });
    var first = null;
    var first_value = 0;
    for (var i in teams) {
      if(teams[i] > first_value) {
        first_value = teams[i];
        first = self.getTeamByGroupIdentifier(i);
      }
    }
    return first;
  };
  self.getGroupSecondTeam = function (group_id) {
    // getMatchesByRound - look if every is closed
    // get the team with the second most scores
    return self.getGroupFirstTeam(group_id);
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
  self.getGroupByID = function (id) {
    for (var i in self.data.groups) {
      var group = self.data.groups[i];
      if(group.id === id) {
        return group;
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

    self.onClickLocationsLabel(); //just the default screen
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
    var location, matches, view;
    location = this.data('item');
    matches = self.model.getMatchesByLocation(location.id);
    view = new LocationView('details', location, matches);
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
    var view, matches, date;
    date = this.data('item');
    matches = self.model.getMatchesByDate(date.id);
    
    var view = new DateView('details', date, matches);
    view.draw();
  };
  self.onClickRound = function () {
    console.log(this.data("item"));
    var view, round, location;
    round = this.data('item');
    matches = self.model.getMatchesByRound(round.id);
    view = new RoundView('details', round, matches);
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
