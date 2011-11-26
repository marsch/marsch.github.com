



function Stadion (domID, data, width, height) {
  if(! (this instanceof arguments.callee)) {
    return new arguments.callee(arguments);
  }

  var self = this;
  
  self.init = function () {
    self.paper = Raphael(domID, width, height);
    self.data = data;
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
    self.drawTeams(self.data.teams);
    self.drawRounds(self.getRounds());
    self.drawDates(self.getMatchDays());
    self.drawLocations(self.getLocations());
    self.drawBottom();
  };


  self.onClickTeamsLabel = function () { 
    $('#details').empty();
    var img = new Image();
    $(img).load(function () {
            $(this).hide(); 
            $('#details').append(this); 
            $(this).attr('z-index', -1);
            $(this).fadeIn();
          })
          .attr('src', 'images/teams_detail.jpg');
  };
  self.onClickLocationsLabel = function () {
    $('#details').empty();
    var img = new Image();
    $(img).load(function () {
            $(this).hide(); 
            $('#details').append(this); 
            $(this).attr('z-index', -1);
            $(this).fadeIn();
          })
          .attr('src', 'images/locations_detail.jpg');

  };
  self.onClickDatesLabel = function () {
    $('#details').empty();
    var img = new Image();
    $(img).load(function () {
            $(this).hide(); 
            $('#details').append(this); 
            $(this).attr('z-index', -1);
            $(this).fadeIn();
          })
          .attr('src', 'images/dates_detail.jpg');
  };
  self.onClickRoundsLabel = function () {
    $('#details').empty();
    var img = new Image();
    $(img).load(function () {
            $(this).hide(); 
            $('#details').append(this); 
            $(this).attr('z-index', -1);
            $(this).fadeIn();
          })
          .attr('src', 'images/rounds_detail.jpg');
  };

  self.onClickLocation = function () {
    $('#details').empty();
    var img = new Image();
    $(img).load(function () {
            $(this).hide(); 
            $('#details').append(this); 
            $(this).attr('z-index', -1);
            $(this).fadeIn();
          })
          .attr('src', 'images/4_games_detail.jpg');
  };
  self.onClickTeam = function () {
    $('#details').empty();
    var img = new Image();
    $(img).load(function () {
            $(this).hide(); 
            $('#details').append(this); 
            $(this).attr('z-index', -1);
            $(this).fadeIn();
          })
          .attr('src', 'images/4_games_detail.jpg');

  };
  self.onClickDate = function () {
    $('#details').empty();
    var img = new Image();
    $(img).load(function () {
            $(this).hide(); 
            $('#details').append(this); 
            $(this).attr('z-index', -1);
            $(this).fadeIn();
          })
          .attr('src', 'images/6_games_detail.jpg');

  };
  self.onClickRound = function () {
    $('#details').empty();
    var img = new Image();
    $(img).load(function () {
            $(this).hide(); 
            $('#details').append(this); 
            $(this).attr('z-index', -1);
            $(this).fadeIn();
          })
          .attr('src', 'images/4_games_detail.jpg');

  };


  self.drawBottom = function () {
    var segment;
    segment = self.paper.path(bottom_path);
    segment.attr(self.itemSegmentAttr);
  };
  self.drawTeams = function (teamData) {
    self.drawItemAndLabel(teams_paths[0], "TEILNEHMER", self.labelItemSegmentAttr, self.labelItemLabelAttr, self.onClickTeamsLabel);
    $(teamData).each(function (i, item) {
      self.drawItemAndLabel(teams_paths[i + 1], item.name, self.itemSegmentAttr, self.itemLabelAttr, self.onClickTeam);
    });
  };
  self.drawRounds = function (roundData) {
    self.drawItemAndLabel(rounds_paths[0], "RUNDEN", self.labelItemSegmentAttr, self.labelItemLabelAttr, self.onClickRoundsLabel);
    $(roundData).each(function (i, item) {
      self.drawItemAndLabel(rounds_paths[i + 1], item.name, self.itemSegmentAttr, self.itemLabelAttr, self.onClickRound);
    });
  };
  self.drawDates = function (datesData) {
    self.drawItemAndLabel(matches_paths[0], "TERMINE", self.labelItemSegmentAttr, self.labelItemLabelAttr, self.onClickDatesLabel);
    $(datesData).each(function (i, item) {
      self.drawItemAndLabel(matches_paths[i + 1], item.name, self.itemSegmentAttr, self.itemLabelAttr, self.onClickDate);
    });
  };
  self.drawLocations = function (locationData) {
    self.drawItemAndLabel(locations_paths[0], "SPIELORTE", self.labelItemSegmentAttr, self.labelItemLabelAttr, self.onClickLocationsLabel);
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
      $(segment.node).click(_.bind(onclick, self));
      $(label.node).click(_.bind(onclick, self));
  };
  self.drawItemAndLabel = function (segmentItem, labelText, segmentFormat, labelFormat, onclick) {
    var segment, label, lx, ly;
      segment = self.paper.path(segmentItem.path);
      segment.attr(segmentFormat);

      lx = segment.getBBox().x + segmentItem.lxoffset;
      ly = segment.getBBox().y + segmentItem.lyoffset;
      label = self.paper.text(lx, ly, labelText);
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
      $(segment.node).click(_.bind(onclick, self));
      $(label.node).click(_.bind(onclick, self));
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
        days.push({id: i, name: i});
      }
    }
    return days;
  };
  self.getLocations = function () {
    return self.data.locations;
  };
  self.init();
};



$(function () {
  var r = new Stadion("stage", data, 941, 531);
});
