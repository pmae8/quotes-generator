var colors = [
    '#F0F8FF', // AliceBlue
    '#FAEBD7', // AntiqueWhite
    '#7FFFD4', // Aquamarine
    '#F0FFFF', // Azure
    '#F5F5DC', // Beige
    '#FFE4C4', // Bisque
    '#0000FF', // Blue
    '#8A2BE2', // BlueViolet
    '#A52A2A', // Brown
    '#DEB887', // BurlyWood
    '#5F9EA0', // CadetBlue
    '#7FFF00', // Chartreuse
    '#D2691E', // Chocolate
    '#FF7F50', // Coral
    '#6495ED', // CornflowerBlue
    '#FFF8DC', // Cornsilk
    '#DC143C', // Crimson
    '#00FFFF', // Cyan
    '#00008B', // DarkBlue
    '#008B8B', // DarkCyan
    '#B8860B', // DarkGoldenRod
    '#A9A9A9', // DarkGray
    '#006400', // DarkGreen
    '#BDB76B', // DarkKhaki
    '#8B008B', // DarkMagenta
    '#556B2F', // DarkOliveGreen
    '#FF8C00', // DarkOrange
    '#9932CC', // DarkOrchid
    '#8B0000', // DarkRed
    '#E9967A', // DarkSalmon
    '#8FBC8F', // DarkSeaGreen
    '#483D8B', // DarkSlateBlue
    '#2F4F4F', // DarkSlateGray
    '#00CED1', // DarkTurquoise
    '#9400D3', // DarkViolet
    '#FF1493', // DeepPink
    '#00BFFF', // DeepSkyBlue
    '#696969', // DimGray
    '#1E90FF', // DodgerBlue
    '#B22222', // FireBrick
    '#FFFAFA', // FloralWhite
    '#228B22', // ForestGreen
    '#FF00FF', // Fuchsia
    '#DCDCDC', // Gainsboro
    '#F8F8FF', // GhostWhite
    '#FFD700', // Gold
    '#DAA520', // GoldenRod
    '#808080', // Gray
    '#008000', // Green
    '#ADFF2F', // GreenYellow
    '#F0FFF0', // HoneyDew
    '#FF69B4', // HotPink
    '#CD5C5C', // IndianRed
    '#4B0082', // Indigo
    '#FFFFF0', // Ivory
    '#F0E68C', // Khaki
    '#E6E6FA', // Lavender
    '#FFF0F5', // LavenderBlush
    '#7CFC00', // LawnGreen
    '#FFFACD', // LemonChiffon
    '#ADD8E6', // LightBlue
    '#F08080', // LightCoral
    '#E0FFFF', // LightCyan
    '#FAFAD2', // LightGoldenRodYellow
    '#D3D3D3', // LightGray
    '#90EE90', // LightGreen
    '#FFB6C1', // LightPink
    '#FFA07A', // LightSalmon
    '#20B2AA', // LightSeaGreen
    '#87CEFA', // LightSkyBlue
    '#778899', // LightSlateGray
    '#B0C4DE', // LightSteelBlue
    '#FFFFE0', // LightYellow
    '#00FF00', // Lime
    '#32CD32', // LimeGreen
    '#FAF0E6', // Linen
    '#FF00FF', // Magenta
    '#800000', // Maroon
    '#66CDAA', // MediumAquaMarine
    '#0000CD', // MediumBlue
    '#BA55D3', // MediumOrchid
    '#9370DB', // MediumPurple
    '#3CB371', // MediumSeaGreen
    '#7B68EE', // MediumSlateBlue
    '#00FA9A', // MediumSpringGreen
    '#48D1CC', // MediumTurquoise
    '#C71585', // MediumVioletRed
    '#191970', // MidnightBlue
    '#F5FFFA', // MintCream
    '#FFE4E1', // MistyRose
    '#FFE4B5', // Moccasin
    '#FFDEAD', // NavajoWhite
    '#000080', // Navy
    '#FDF5E6', // OldLace
    '#808000', // Olive
    '#6B8E23', // OliveDrab
    '#FFA500', // Orange
    '#FF4500', // OrangeRed
    '#DA70D6', // Orchid
    '#EEE8AA', // PaleGoldenRod
    '#98FB98', // PaleGreen
    '#AFEEEE', // PaleTurquoise
    '#DB7093', // PaleVioletRed
    '#FFEFD5', // PapayaWhip
    '#FFDAB9', // PeachPuff
    '#CD853F', // Peru
    '#FFC0CB', // Pink
    '#DDA0DD', // Plum
    '#B0E0E6', // PowderBlue
    '#800080', // Purple
    '#FF0000', // Red
    '#BC8F8F', // RosyBrown
    '#4169E1', // RoyalBlue
    '#8B4513', // SaddleBrown
    '#FA8072', // Salmon
    '#F4A460', // SandyBrown
    '#2E8B57', // SeaGreen
    '#FFF5EE', // SeaShell
    '#A0522D', // Sienna
    '#C0C0C0', // Silver
    '#87CEEB', // SkyBlue
    '#6A5ACD', // SlateBlue
    '#708090', // SlateGray
    '#FFFAFA', // Snow
    '#00FF7F', // SpringGreen
    '#4682B4', // SteelBlue
    '#D2B48C', // Tan
    '#008080', // Teal
    '#D8BFD8', // Thistle
    '#FF6347', // Tomato
    '#40E0D0', // Turquoise
    '#EE82EE', // Violet
    '#F5DEB3', // Wheat
    '#FFFFFF', // White
    '#F5F5F5', // WhiteSmoke
    '#FFFF00', // Yellow
    '#9ACD32'  // YellowGreen
  ];
  
  var currentQuote = '', currentAuthor = '';
  var quotesData = [
    {"q":"Don't waste your energy on being angry at something that somebody did six months ago or a year ago. It's over.","a":"Joan Rivers"}, 
    {"q":"Question everything. Learn something. Answer nothing.","a":"Euripides"},
    {"q":"Successful people appreciate where they have come from, but they don't let their past set the tone for their future.","a":"Steve Harvey"},
    {"q":"Unhappiness enters through a door that has been left open.","a":"Zen Proverb"},
    {"q":"Our happiness depends on the habit of mind we cultivate.","a":"Norman Vincent Peale"},
    {"q":"Any thought that is passed on to the subconscious often enough and convincingly enough is finally accepted.","a":"Robert Collier"}, 
    {"q":"Ability is a poor man's wealth.","a":"John Wooden"},
    {"q":"Don't think money does everything or you are going to end up doing everything for money.","a":"Voltaire"},
    {"q":"Life is really simple, but men insist on making it complicated. ","a":"Confucius"},
    {"q":"The right thing to do and the hard thing to do are usually the same.","a":"Steve Maraboli"},
    {"q":"Sometimes you have to shut your eyes, so you can see the real beauty.","a":"Kilian Jornet"},
    {"q":"The soul should always stand ajar, ready to welcome the ecstatic experience.","a":"Emily Dickinson"},
    {"q":"Sometimes it is more important to discover what one cannot do, than what one can do.","a":"Lin Yutang"},
    {"q":"You can easily judge the character of a man by how he treats those who can do nothing for him.","a":"Simon Sinek"},
    {"q":"There are two ways of seeing: with the body and with the soul. The body's sight can sometimes forget, but the soul remembers forever.","a":"Alexandre Dumas"},
    {"q":"The best way to not feel hopeless is to get up and do something.","a":"Barack Obama"},
    {"q":"Wherever you are, it's the place you need to be.","a":"Maxime Lagace"},
    {"q":"No man is happy who does not think himself so.","a":"Norman Vincent Peale"},
    {"q":"Every defeat, every heartbreak every loss, contains its own seed, its own lesson on how to improve your performance the next time.","a":"Og Mandino"},
    {"q":"Even if I knew that tomorrow the world would go to pieces, I would still plant my apple tree. ","a":"Martin Luther"},
    {"q":"Receive without complaint, Work with fate.","a":"Ming-Dao Deng"},
    {"q":"I have never in my life learned anything from any man who agreed with me.","a":"Dudley Field Malone"},
    {"q":"The goal is not to be perfect by the end, the goal is to be better today.","a":"Simon Sinek"},
    {"q":"From error to error one discovers the entire truth.","a":"Sigmund Freud"},
    {"q":"He who loses wealth loses much; he who loses a friend loses more; but he that loses his courage loses all.","a":"Miguel de Cervantes"}, 
    {"q":"Any idea, plan, or purpose may be placed in the mind through repetition of thought.","a":"Napoleon Hill"},
    {"q":"When something comes from within, when it is a part of you, you have no choice but to live it, to express it.","a":"Kamal Ravikant"},
    {"q":"Decide upon your major definite purpose in life and then organize all your activities around it.","a":"Brian Tracy"},
    {"q":"One of the oldest human needs is having someone to wonder where you are when you don't come home at night. ","a":"Margaret Mead"}, 
    {"q":"Attitude drives actions. Actions drive results. Results drive lifestyles.","a":"Jim Rohn"},
    {"q":"Never argue with stupid people, they will drag you down to their level and then beat you with experience.","a":"Mark Twain"},
    {"q":"Never spend your money before you have earned it.","a":"Thomas Jefferson"},
    {"q":"Giving back involves a certain amount of giving up.","a":"Colin Powell"},
    {"q":"Humor isn't for everyone. It's only for people who want to have fun, enjoy life, and feel alive.","a":"Anne Wilson Schaef"},
    {"q":"Repetition does not transform a lie into a truth.","a":"Franklin D. Roosevelt"},
    {"q":"Be not glad at the misfortune of another, though he may be your enemy. ","a":"George Washington"},
    {"q":"I know not all that may be coming, but be it what it will, I'll go to it laughing.","a":"Herman Melville"},
    {"q":"Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy.","a":"Thich Nhat Hanh"},
    {"q":"When you've got nothing, you've got nothing to lose.","a":"Bob Dylan"},
    {"q":"Making your mark on the world is hard. If it were easy, everybody would do it.","a":"Barack Obama"},
    {"q":"Do it with passion, or not at all.","a":"Rosa Nouchette Carey"},
    {"q":"Remain calm, serene, always in command of yourself. You will then find out how easy it is to get along. ","a":"Paramahansa Yogananda"},
    {"q":"I can live without money, but I cannot live without love.","a":"Judy Garland"},
    {"q":"Dreams have only one owner at a time. That's why dreamers are lonely.","a":"William Faulkner"},
    {"q":"Originality is the fine art of remembering what you hear but forgetting where you heard it. ","a":"Laurence J. Peter"},
    {"q":"To a mind that is still, the entire universe surrenders.","a":"Zhuangzi"},
    {"q":"Know your gifts and share them.","a":"Les Brown"},
    {"q":"Good entrepreneurs don't fail because they stay at it.","a":"Naval Ravikant"},
    {"q":"Everyday you can take a tiny step in the right direction.","a":"Unknown"},
    {"q":"Make peace with your inner turmoil.","a":"Unknown"}
  ];
  
  
  function openURL(url){
    window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
  }
  
  function getRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotesData.length);
    return quotesData[randomIndex];
  }
  
  function getQuote() {
    var quote = getRandomQuote(); 
  
    currentQuote = quote.q;
    currentAuthor = quote.a;
  
    $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)); 
  
    $("#text").text(currentQuote); 
    $("#author").text(currentAuthor); 
  
    var color = Math.floor(Math.random() * colors.length);
  
    $("body").css("background-color", colors[color]); 
  
    $("body").css("color", "#ffffff"); 

    $(".button").css("background-color", colors[color]); 
  }
  
  $(document).ready(function() {
    getQuote();
    $('#new-quote').on('click', getQuote);
    $('#tweet-quote').on('click', function() {
      openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
    });
    $('#tumblr-quote').on('click', function() {
      openURL('https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='+encodeURIComponent(currentAuthor)+'&content=' + encodeURIComponent(currentQuote)+'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'); 
    });
  });