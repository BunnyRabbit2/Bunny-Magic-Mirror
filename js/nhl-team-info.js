var nhlTeamIds = [
    {name:"New Jersey Devils", id:1},
    {name:"New York Islanders", id:2},
    {name:"New York Rangers", id:3},
    {name:"Philadelphia Flyers", id:4},
    {name:"Pittsburgh Penguins", id:5},
    {name:"Boston Bruins", id:6},
    {name:"Buffalo Sabres", id:7},
    {name:"Montreal Canadiens", id:8},
    {name:"Ottawa Senators", id:9},
    {name:"Toronto Maple Leafs", id:10},
    
    {name:"Atlanta Thrashers", id:11}, // NOT CURRENTLY ACTIVE
    
    {name:"Carolina Hurricanes", id:12},
    {name:"Florida Panthers", id:13},
    {name:"Tampa Bay Lightning", id:14},
    {name:"Washington Capitals", id:15},
    {name:"Chicago Blackhawks", id:16},
    {name:"Detroit Red Wings", id:17},
    {name:"Nashville Predators", id:18},
    {name:"St. Louis Blues", id:19},
    {name:"Calgary Flames", id:20},
    {name:"Colorado Avalanche", id:21},
    {name:"Edmonton Oilers", id:22},
    {name:"Vancouver Canucks", id:23},
    {name:"Anaheim Ducks", id:24},
    {name:"Dallas Stars", id:25},
    {name:"Los Angeles Kings", id:26},
    
    {name:"Phoenix Coyotes", id:27}, // NOT CURRENTLY ACTIVE
    
    {name:"San Jose Sharks", id:28},
    {name:"Columbus Blue Jackets", id:29},
    {name:"Minnesota Wild", id:30},
    
    {name:"Minnesota North Stars", id:31}, // NOT CURRENTLY ACTIVE
    {name:"Quebec Nordiques", id:32}, // NOT CURRENTLY ACTIVE
    {name:"Winnipeg Jets (1979)", id:33}, // NOT CURRENTLY ACTIVE
    {name:"Hartford Whalers", id:34}, // NOT CURRENTLY ACTIVE
    {name:"Colorado Rockies", id:35}, // NOT CURRENTLY ACTIVE
    {name:"Ottawa Senators (1917)", id:36}, // NOT CURRENTLY ACTIVE
    {name:"Hamilton Tigers", id:37}, // NOT CURRENTLY ACTIVE
    {name:"Pittsburgh Pirates", id:38}, // NOT CURRENTLY ACTIVE
    {name:"Philadelphia Quakers", id:39}, // NOT CURRENTLY ACTIVE
    {name:"Detroit Cougars", id:40}, // NOT CURRENTLY ACTIVE
    {name:"Montreal Wanderers", id:41}, // NOT CURRENTLY ACTIVE
    {name:"Quebec Bulldogs", id:42}, // NOT CURRENTLY ACTIVE
    {name:"Montreal Maroons", id:43}, // NOT CURRENTLY ACTIVE
    {name:"New York Americans", id:44}, // NOT CURRENTLY ACTIVE
    {name:"Saint Louis Eagles", id:45}, // NOT CURRENTLY ACTIVE
    {name:"Oakland Seals", id:46}, // NOT CURRENTLY ACTIVE
    {name:"Atlanta Flames", id:47}, // NOT CURRENTLY ACTIVE
    {name:"Kansas locationName Scouts", id:48}, // NOT CURRENTLY ACTIVE
    {name:"Cleveland Barons", id:49}, // NOT CURRENTLY ACTIVE
    {name:"Detroit Falcons", id:50}, // NOT CURRENTLY ACTIVE
    {name:"Brooklyn Americans", id:51}, // NOT CURRENTLY ACTIVE
    
    {name:"Winnipeg Jets", id:52},
    {name:"Arizona Coyotes", id:53}
    ];
    
var nhlTeamNames = {};
nhlTeamNames[1] =  {longName:"New Jersey Devils", abbreviation:"NJD", locationName:"New Jersey", teamName:"Devils", id:1},
nhlTeamNames[2] =  {longName:"New York Islanders", abbreviation:"NYI", locationName:"New York", teamName:"Islanders", id:2},
nhlTeamNames[3] =  {longName:"New York Rangers", abbreviation:"NYR", locationName:"New York", teamName:"Rangers", id:3},
nhlTeamNames[4] =  {longName:"Philadelphia Flyers", abbreviation:"PHI", locationName:"Philadelphia", teamName:"Flyers", id:4},
nhlTeamNames[5] =  {longName:"Pittsburgh Penguins", abbreviation:"PIT", locationName:"Pittsburgh", teamName:"Penguins", id:5},
nhlTeamNames[6] =  {longName:"Boston Bruins", abbreviation:"BOS", locationName:"Boston", teamName:"Bruins", id:6},
nhlTeamNames[7] =  {longName:"Buffalo Sabres", abbreviation:"BUF", locationName:"Buffalo", teamName:"Sabres", id:7},
nhlTeamNames[8] =  {longName:"Montreal Canadiens", abbreviation:"MON", locationName:"Montreal", teamName:"Canadiens", id:8},
nhlTeamNames[9] =  {longName:"Ottawa Senators", abbreviation:"OTT", locationName:"Ottawa", teamName:"Senators", id:9},
nhlTeamNames[10] = {longName:"Toronto Maple Leafs", abbreviation:"TOR", locationName:"Toronto", teamName:"Maple Leafs", id:10},
nhlTeamNames[12] = {longName:"Carolina Hurricanes", abbreviation:"CAR", locationName:"Carolina", teamName:"Hurricanes", id:12},
nhlTeamNames[13] = {longName:"Florida Panthers", abbreviation:"FLO", locationName:"Florida", teamName:"Panthers", id:13},
nhlTeamNames[14] = {longName:"Tampa Bay Lightning", abbreviation:"TBL", locationName:"Tampa Bay", teamName:"Lightning", id:14},
nhlTeamNames[15] = {longName:"Washington Capitals", abbreviation:"WAS", locationName:"Washington", teamName:"Capitals", id:15},
nhlTeamNames[16] = {longName:"Chicago Blackhawks", abbreviation:"CHI", locationName:"Chicago", teamName:"Blackhawks", id:16},
nhlTeamNames[17] = {longName:"Detroit Red Wings", abbreviation:"DET", locationName:"Detroit", teamName:"Red Wings", id:17},
nhlTeamNames[18] = {longName:"Nashville Predators", abbreviation:"NSH", locationName:"Nashvillez", teamName:"Predators", id:18},
nhlTeamNames[19] = {longName:"St. Louis Blues", abbreviation:"STL", locationName:"St. Louis", teamName:"Blues", id:19},
nhlTeamNames[20] = {longName:"Calgary Flames", abbreviation:"CAL", locationName:"Calgary", teamName:"Flames", id:20},
nhlTeamNames[21] = {longName:"Colorado Avalanche", abbreviation:"COL", locationName:"Colorado", teamName:"Avalanche", id:21},
nhlTeamNames[22] = {longName:"Edmonton Oilers", abbreviation:"EDM", locationName:"Edmonton", teamName:"Oilers", id:22},
nhlTeamNames[23] = {longName:"Vancouver Canucks", abbreviation:"VAN", locationName:"Vancouver", teamName:"Canucks", id:23},
nhlTeamNames[24] = {longName:"Anaheim Ducks", abbreviation:"ANA", locationName:"Anaheim", teamName:"Ducks", id:24},
nhlTeamNames[25] = {longName:"Dallas Stars", abbreviation:"DAL", locationName:"Dallas", teamName:"Stars", id:25},
nhlTeamNames[26] = {longName:"Los Angeles Kings", abbreviation:"LAK", locationName:"Los Angeles", teamName:"Kings", id:26},
nhlTeamNames[28] = {longName:"San Jose Sharks", abbreviation:"SJS", locationName:"San Jose", teamName:"Sharks", id:28},
nhlTeamNames[29] = {longName:"Columbus Blue Jackets", abbreviation:"CBJ", locationName:"Columbus", teamName:"Blue Jackets", id:29},
nhlTeamNames[30] = {longName:"Minnesota Wild", abbreviation:"MIN", locationName:"Minnesota", teamName:"Wild", id:30},
nhlTeamNames[52] = {longName:"Winnipeg Jets", abbreviation:"WIN", locationName:"Winnipeg", teamName:"Jets", id:52},
nhlTeamNames[53] = {longName:"Arizona Coyotes", abbreviation:"ARI", locationName:"Arizona", teamName:"Coyotes", id:53}
