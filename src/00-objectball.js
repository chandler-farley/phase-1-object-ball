function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    }
}

function numPointsScored(playerName) {
    let game = gameObject();
    for (let team in game) {
      const players = game[team].players;
      for (let player in players) {
        if (player === playerName) {
          console.log(`${playerName}:`, players[player].points);
        }
      }
    }
}
  
function shoeSize(playerName) {
    let game = gameObject();
    for (let team in game) {
      const players = game[team].players;
      for (let player in players) {
        if (player === playerName) {
          console.log(`${playerName}\'s shoe size:`, players[player].shoe)
        }
      }
    }
  }
  
function teamColors(teamName) {
    let game = gameObject();
    if (teamName === game.home.teamName) {
      return game.home.colors;
    } else if (teamName === game.away.teamName) {
      return game.away.colors;
    }
}
  
function teamNames() {
    let game = gameObject();
    return [game.home.teamName, game.away.teamName];
}
  
function playerNumbers(teamName) {
    let jerseyNumbers = [];
    let game = gameObject();
    for (let team in game) {
      let teamData = game[team];
      if (teamName === teamData.teamName) {
        for (let player in teamData.players) {
          jerseyNumbers.push(teamData.players[player].number)
        }
      }
    }
    return jerseyNumbers;
}
  
function playerStats(playerName) {
    let game = gameObject();
    for (let team in game) {
      for (let player in game[team].players) {
        if (playerName === player) {
          return game[team].players[player]
        }
      }
    }
}
  
function bigShoeRebounds() {
    let largestShoeSize = 0;
    let playerWithLargestShoeSize = "";
    let game = gameObject();
    for (team in game) {
      let players = game[team].players;
      for (player in players) {
        let currentPlayer = game[team].players[player];
        if (currentPlayer.shoe > largestShoeSize) {
          largestShoeSize = currentPlayer.shoe;
          playerWithLargestShoeSize = player;
          numOfRebounds = currentPlayer.rebounds
        }
      }
    }
    return `${playerWithLargestShoeSize} - Shoe size: ${largestShoeSize}, Rebounds: ${numOfRebounds}`;
}
  
function mostPointsScored() {
    let pointsScored = 0;
    let playerWithMostPoints = "";
    let game = gameObject();
    for (team in game) {
      let players = game[team].players;
      for (playerData in players) {
        let currentPlayer = game[team].players[playerData];
        if (currentPlayer.points > pointsScored) {
          pointsScored = currentPlayer.points;
          playerWithMostPoints = playerData;
        }
      }
    }
    return `${playerWithMostPoints} scored a game high of ${pointsScored} points`
}
  
function winningTeam() {
    let maxPoints = 0;
    let winner = "";
    let game = gameObject();
    for (team in game) {
      let teamPoints = 0;
      let players = game[team].players
      for (player in players) {
        teamPoints += game[team].players[player].points
      }
      if (teamPoints > maxPoints) {
        maxPoints = teamPoints;
        teamName = game[team].teamName
      }
    }
    return `${teamName} won the game with ${maxPoints} points!`;
}
  
function playerWithLongestName() {
    let game = gameObject();
    let longestNamePlayer = "";
    for (team in game) {
        let players = game[team].players;
        for (player in players) {
            if (player.length > longestNamePlayer.length) {
          longestNamePlayer = player;
            }
        }
    }
    return `${longestNamePlayer} has the longest name`;
}
