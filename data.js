data = {
  teams: [
    { id: "t1", short_name: "DEN", name: "Dänemark"},
    { id: "t2", short_name: "GER", name: "Deutschland"},
    { id: "t3", short_name: "ENG", name: "England"},
    { id: "t4", short_name: "FRA", name: "Frankreich"},
    { id: "t5", short_name: "GRE", name: "Griechenland"},
    { id: "t6", short_name: "IRL", name: "Irland"},
    { id: "t7", short_name: "ITA", name: "Italien"},
    { id: "t8", short_name: "CRO", name: "Kroatien"},
    { id: "t9", short_name: "NED", name: "Niederlande"},
    { id: "t10", short_name: "POL", name: "Polen"},
    { id: "t11", short_name: "POR", name: "Portugal"},
    { id: "t12", short_name: "RUS", name: "Russland"},
    { id: "t13", short_name: "SWE", name: "Schweden"},
    { id: "t14", short_name: "ESP", name: "Spanien"},
    { id: "t15", short_name: "CZE", name: "Tschech. Rep."},
    { id: "t16", short_name: "UKR", name: "Ukraine"}
  ],
  groups: [
    { id: "ga", short_name: "A", name: "Gruppe A", members: [ "t10", "t1", "t2", "t3"] },
    { id: "gb", short_name: "B", name: "Gruppe B", members: [ "t4", "t5", "t6", "t7"] },
    { id: "gc", short_name: "C", name: "Gruppe C", members: [ "t8", "t9", "t11", "t12"] },
    { id: "gd", short_name: "D", name: "Gruppe D", members: [ "t16", "t13", "t14", "t15"] }
  ],
  locations: [
    { id: "s2", short_name: "Municipal Stadion", name: "Municipal Stadion\nBreslau", country: "POL"},
    { id: "s5", short_name: "Arena Gdansk", name: "Arena Gdansk\nDanzig", country: "POL"},
    { id: "s6", short_name: "Stadion Miejski", name: "Stadion Miejski\nPosen", country: "POL" },
    { id: "s1", short_name: "National Stadion", name: "National Stadion\nWarschau", country: "POL"},
    
    { id: "s3", short_name: "Metalist Stadion", name: "Metalist Stadion\nCharkiw", country: "UKR" },
    { id: "s8", short_name: "Donbass Arena", name: "Donbass Arena\nDonezk", country: "UKR" },
    { id: "s7", short_name: "Olympia Stadion", name: "Olympia Stadion\nKiew", country: "UKR" },
    { id: "s4", short_name: "Arena Lwiw", name: "Arena Lwiw\nLwiw", country: "UKR" }
  ],
  matches: {
    '08. Juni': [
      { id: 1, location: "s1", team_1: "a1", team_2: "a2", date: "08.06.", time: "18:00", score: { team_1: 2, team_2: 4 }, result_type:'normal', status: 'closed', link_2: {label: 'Bericht >', url: 'http://www.yahoo.de'}},
      { id: 2, location: "s2", team_1: "a3", team_2: "a4", date: "08.06.", time: "20:45", score: { team_1: 2, team_2: 4 }, result_type:'normal', status: 'closed', link_1: {label: 'Liveticker >', url: 'http://www.google.de'}}
    ],
    '09. Juni': [
      { id: 3, location: "s3", team_1: "b1", team_2: "b2", date: "09.06.", time: "18:00", score: { team_1: 2, team_2: 4 }, result_type:'normal', status: 'closed'},
      { id: 4, location: "s4", team_1: "b3", team_2: "b3", date: "09.06.", time: "20:45", score: { team_1: 2, team_2: 4 }, result_type:'normal', status: 'closed', link_1: {label: 'Liveticker >', url: 'http://www.google.de'}, link_2: {label: 'Bericht >', url: 'http://www.yahoo.de'}  }
    ],
    '10. Juni': [
      { id: 5, location: "s5", team_1: "c1", team_2: "c2", date: "10.06.", time: "18:00", score: { team_1: 2, team_2: 4 }, result_type:'normal', status: 'closed', link_1: {label: 'Liveticker >', url: 'http://www.google.de'}, link_2: {label: 'Bericht >', url: 'http://www.yahoo.de'}  },
      { id: 6, location: "s6", team_1: "c3", team_2: "c4", date: "10.06.", time: "20:45", score: { team_1: 2, team_2: 4 }, result_type:'normal', status: 'closed', link_1: {label: 'Liveticker >', url: 'http://www.google.de'}, link_2: {label: 'Bericht >', url: 'http://www.yahoo.de'}  }
    ],
    '11. Juni': [
      { id: 8, location: "s7", team_1: "d1", team_2: "d2", date: "11.06.", time: "20:45", score: { team_1: 2, team_2: 4 }, result_type:'normal', status: 'closed', link_1: {label: 'Liveticker >', url: 'http://www.google.de'}, link_2: {label: 'Bericht >', url: 'http://www.yahoo.de'}  },
      { id: 7, location: "s8", team_1: "d3", team_2: "d4", date: "11.06.", time: "18:00", score: { team_1: 2, team_2: 4 }, result_type:'normal', status: 'closed', link_1: {label: 'Liveticker >', url: 'http://www.google.de'}, link_2: {label: 'Bericht >', url: 'http://www.yahoo.de'}  }
    ],
    '12. Juni': [
      { id: 10, location: "s1", team_1: "a1", team_2: "a3", date: "12.06.", time: "20:45", score: { team_1: 2, team_2: 4 }, result_type:'normal', status: 'closed', link_1: {label: 'Liveticker >', url: 'http://www.google.de'}, link_2: {label: 'Bericht >', url: 'http://www.yahoo.de'}  },
      { id: 9, location: "s2", team_1: "a2", team_2: "a4", date: "12.06.", time: "18:00", score: { team_1: 2, team_2: 4 }, result_type:'normal', status: 'closed', link_1: {label: 'Liveticker >', url: 'http://www.google.de'}, link_2: {label: 'Bericht >', url: 'http://www.yahoo.de'}  }
    ],
    '13. Juni': [
      { id: 12, location: "s3", team_1: "b1", team_2: "b3", date: "13.06.", time: "20:45", score: { team_1: 2, team_2: 4 }, result_type:'normal', status: 'closed', link_1: {label: 'Liveticker >', url: 'http://www.google.de'}, link_2: {label: 'Bericht >', url: 'http://www.yahoo.de'}  },
      { id: 11, location: "s4", team_1: "b2", team_2: "b4", date: "13.06.", time: "18:00", score: { team_1: 2, team_2: 4 }, result_type:'normal', status: 'closed', link_1: {label: 'Liveticker >', url: 'http://www.google.de'}, link_2: {label: 'Bericht >', url: 'http://www.yahoo.de'}  }
    ],
    '14. Juni': [
      { id: 14, location: "s5", team_1: "c1", team_2: "c3", date: "14.06.", time: "20:45", score: { team_1: 2, team_2: 4 }, result_type:'normal', status: 'closed', link_1: {label: 'Liveticker >', url: 'http://www.google.de'}, link_2: {label: 'Bericht >', url: 'http://www.yahoo.de'}  },
      { id: 13, location: "s6", team_1: "c2", team_2: "c4", date: "14.06.", time: "18:00", score: { team_1: 2, team_2: 4 }, result_type:'normal', status: 'closed', link_1: {label: 'Liveticker >', url: 'http://www.google.de'}, link_2: {label: 'Bericht >', url: 'http://www.yahoo.de'}  }
    ],
    '15. Juni': [
      { id: 15, location: "s7", team_1: "d2", team_2: "d4", date: "15.06.", time: "18:00", score: { team_1: 2, team_2: 4 }, result_type:'normal', status: 'closed', link_1: {label: 'Liveticker >', url: 'http://www.google.de'}, link_2: {label: 'Bericht >', url: 'http://www.yahoo.de'}  },
      { id: 16, location: "s8", team_1: "d1", team_2: "d3", date: "15.06.", time: "20:45", score: { team_1: 2, team_2: 4 }, result_type:'normal', status: 'closed', link_1: {label: 'Liveticker >', url: 'http://www.google.de'}, link_2: {label: 'Bericht >', url: 'http://www.yahoo.de'}  }
    ],
    '16. Juni': [
      { id: 18, location: "s1", team_1: "a2", team_2: "a3", date: "16.06.", time: "20:45", score: { team_1: 2, team_2: 4 }, result_type:'normal', status: 'closed', link_1: {label: 'Liveticker >', url: 'http://www.google.de'}, link_2: {label: 'Bericht >', url: 'http://www.yahoo.de'}  },
      { id: 17, location: "s2", team_1: "a4", team_2: "a1", date: "16.06.", time: "20:45", score: { team_1: 2, team_2: 4 }, result_type:'normal', status: 'closed', link_1: {label: 'Liveticker >', url: 'http://www.google.de'}, link_2: {label: 'Bericht >', url: 'http://www.yahoo.de'}  }
    ],
    '17. Juni': [
      { id: 19, location: "s3", team_1: "b4", team_2: "b1", date: "17.06.", time: "20:45", score: { team_1: 2, team_2: 4 }, result_type:'normal', status: 'closed', link_1: {label: 'Liveticker >', url: 'http://www.google.de'}, link_2: {label: 'Bericht >', url: 'http://www.yahoo.de'}  },
      { id: 20, location: "s4", team_1: "b2", team_2: "b3", date: "17.06.", time: "20:45", score: { team_1: 2, team_2: 4 }, result_type:'normal', status: 'closed', link_1: {label: 'Liveticker >', url: 'http://www.google.de'}, link_2: {label: 'Bericht >', url: 'http://www.yahoo.de'}  }
    ],
    '18. Juni': [
      { id: 21, location: "s5", team_1: "c4", team_2: "c1", date: "18.06.", time: "20:45", score: { team_1: 2, team_2: 4 }, result_type:'normal', status: 'closed', link_1: {label: 'Liveticker >', url: 'http://www.google.de'}, link_2: {label: 'Bericht >', url: 'http://www.yahoo.de'}  },
      { id: 22, location: "s6", team_1: "c2", team_2: "c3", date: "18.06.", time: "20:45", score: { team_1: 2, team_2: 4 }, result_type:'normal', status: 'closed', link_1: {label: 'Liveticker >', url: 'http://www.google.de'}, link_2: {label: 'Bericht >', url: 'http://www.yahoo.de'}  }
    ],
    '19. Juni': [
      { id: 24, location: "s7", team_1: "d2", team_2: "d3", date: "19.06.", time: "20:45", score: { team_1: 2, team_2: 4 }, result_type:'normal', status: 'closed', link_1: {label: 'Liveticker >', url: 'http://www.google.de'}, link_2: {label: 'Bericht >', url: 'http://www.yahoo.de'}  },
      { id: 23, location: "s8", team_1: "d4", team_2: "d1", date: "19.06.", time: "20:45", score: { team_1: 2, team_2: 4 }, result_type:'normal', status: 'closed', link_1: {label: 'Liveticker >', url: 'http://www.google.de'}, link_2: {label: 'Bericht >', url: 'http://www.yahoo.de'}  }
    ],
    //Viertelfinale
    '21. Juni': [
      { id: 25, location: "s1", team_1: "WA", team_2: "RB", date: "21.06.", time: "20:45", score: { team_1: 2, team_2: 5}, result_type:'normal', status: 'closed', link_1: {label: 'Liveticker >', url: 'http://www.google.de'}, link_2: {label: 'Bericht >', url: 'http://www.yahoo.de'}  }
    ],
    '22. Juni': [
      { id: 26, location: "s5", team_1: "WB", team_2: "RA", date: "22.06.", time: "20:45", score: { team_1: 2, team_2: 5}, result_type:'normal', status: 'closed', link_1: {label: 'Liveticker >', url: 'http://www.google.de'}, link_2: {label: 'Bericht >', url: 'http://www.yahoo.de'}  }
    ],
    '23. Juni':[
      { id: 27, location: "s8", team_1: "WC", team_2: "RD", date: "23.06.", time: "20:45", score: { team_1: 2, team_2: 5}, result_type:'normal', status: 'closed', link_1: {label: 'Liveticker >', url: 'http://www.google.de'}, link_2: {label: 'Bericht >', url: 'http://www.yahoo.de'}  }
    ],
    '24. Juni': [
      { id: 28, location: "s7", team_1: "WD", team_2: "RC", date: "24.06.", time: "20:45", score: { team_1: 2, team_2: 5}, result_type:'normal', status: 'closed', link_1: {label: 'Liveticker >', url: 'http://www.google.de'}, link_2: {label: 'Bericht >', url: 'http://www.yahoo.de'}  }
    ],
    
    //Halbfinale
    '27. Juni': [
      { id: 29, location: "s8", team_1: "W25", team_2: "W27", date: "27.06.", time: "20:45", score: { team_1: 2, team_2: 5}, result_type:'normal', status: 'closed', link_1: {label: 'Liveticker >', url: 'http://www.google.de'}, link_2: {label: 'Bericht >', url: 'http://www.yahoo.de'}  }
    ],
    '28. Juni': [
      { id: 30, location: "s1", team_1: "W26", team_2: "W28", date: "28.06.", time: "20:45", score: { team_1: 2, team_2: 5}, result_type:'normal', status: 'closed', link_1: {label: 'Liveticker >', url: 'http://www.google.de'}, link_2: {label: 'Bericht >', url: 'http://www.yahoo.de'}  }
    ],

    // Finale
    '01. Juli': [
      { id: 31, location: "s7", team_1: "W29", team_2: "W30", date: "01.07.", time: "20:45", score: { team_1: 2, team_2: 5}, result_type:'normal', status: 'closed', link_1: {label: 'Liveticker >', url: 'http://www.google.de'}, link_2: {label: 'Bericht >', url: 'http://www.yahoo.de'}  }
    ]
  }
};
