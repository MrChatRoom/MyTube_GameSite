let currentGame = "";

/* VIEW COUNTER */
let views = 0;
let viewInterval;

/* LOAD VIDEO */
function loadVideo(id){

  window.history.pushState({}, "", "?v=" + id);

  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const osc = ctx.createOscillator();
  osc.frequency.value = 520;
  osc.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + 0.08);

  const player = document.getElementById("player");

  if(viewInterval) clearInterval(viewInterval);
  views = 0;

  if(id === "cookie"){
    currentGame = "cookie";
    player.innerHTML = `<iframe src="game1/index.html" style="width:100%;height:360px;border:0;"></iframe>`;
    document.getElementById("embedcode").value =
`<iframe src="game1/index.html" width="640" height="360"></iframe>`;
  }

  if(id === "snake"){
    currentGame = "snake";
    player.innerHTML = `<iframe src="game2/index.html" style="width:100%;height:360px;border:0;"></iframe>`;
    document.getElementById("embedcode").value =
`<iframe src="game2/index.html" width="640" height="360"></iframe>`;
  }

  startViews();
  generateChat();
  startChatSpam();
}

/* VIEW COUNTER LIVE */
function startViews(){

  const el = document.getElementById("viewCount");

  viewInterval = setInterval(() => {
    views += Math.floor(Math.random()*5)+1;
    el.textContent = views;
  }, 500);
}

/* ===== NAME SYSTEM (20/20/20) ===== */

const start = [
  "xX","dark","pro","ultra","mega","cool","retro","noob","sk8","neo",
  "pixel","giga","omega","hyper","xx","z","cyber","ghost","alpha","beta",
  "xxX","Xx","darkx","prox","ultrax","megax","coolx","retrox","noobx","sk8x",
  "neox","pixelx","gigax","omegax","hyperx","zx","cyberx","ghostx","alphax","betax",
  "lord","xpro","xmega","xdark","xcool","xretro","xnoob","xsk8","xneo","xpixel",
  "glitch","error","lag","crash","system","admin","root","hack","virus","void"
];

const mid = [
  "skater","gamer","killer","wizard","ninja","player","lord","kid","bot","dude",
  "master","legend","ghost","runner","clicker","snake","cookie","chaos","pixel","glitch",
  "hunter","rider","beast","champ","noob","pro","elite","shadow","storm","fire",
  "ice","dark","light","hyper","mega","ultra","omega","alpha","beta","sigma",
  "crash","lag","speed","drift","spark","byte","code","hack","error","virus",
  "system","admin","glitcher","sniper","fighter","builder","destroyer","wanderer","dreamer","machine"
];

const end = [
  "_","x","xx","00","99","420","1337","7","x_","z",
  "q","v","k","m","s","l","r","n","zz","xp",
  "xX","_x","x_","xxX","Xx","0","1","2","3","4",
  "5","6","8","9","77","88","666","777","999","123",
  "pro","lol","xd","ok","no","yes","win","fail","gg","ez",
  "rekt","op","bot","sys","net","exe","dll","tmp"
];

/* RANDOM NAME */
function nameGen(){
  return start[Math.floor(Math.random()*start.length)] +
         mid[Math.floor(Math.random()*mid.length)] +
         end[Math.floor(Math.random()*end.length)] +
         Math.floor(Math.random()*9999);
}

/* ===== MESSAGE SYSTEM (20 START / 20 MID / 20 END LOGIC) ===== */

const msgStart = [
  "bro","yo","lol","wtf","this","game","chat","im","we","they",
  "someone","everyone","no way","holy","broooo","nah","ok","wait","lmao","this dude",
  "bruh","omg","hey","sup","nahh","idk","actually","basically","literally","fr","ngl",
  "this guy","that dude","random","guys","people","internet","server","gameplay","moment",
  "bro what","yo wait","lol wait","wtf bro","nah bro","ok wait","listen","watch","see",
  "anyone","everybody","nobody","someone here","what if","imagine","just","like","so",
  "honestly","real talk","chat fr","bro fr","this is"
];

const msgMidSnake = [
  "the snake is",
  "the tail is",
  "the wall is",
  "this snake",
  "my snake",
  "that snake",
  "the speed",
  "level up",
  "collision",
  "spawn",
  "the snake body",
  "the head movement",
  "the grid glitch",
  "the pixel snake",
  "the turning speed",
  "the wall crash",
  "the snake growth",
  "the tail chase",
  "the arena edge",
  "the snake loop",
  "the movement lag",
  "the classic snake",
  "the arcade vibe",
  "the snake AI",
  "the self collision",
  "the map border",
  "the speed boost",
  "the snake path",
  "the corner trap",
  "the pixel trail",
  "the grid space",
  "the snake length",
  "the body chain",
  "the instant crash",
  "the tight corner",
  "the movement glitch",
  "the retro snake",
  "the snake engine",
  "the wall physics",
  "the turning point",
  "the snake drift",
  "the head chase",
  "the body follow",
  "the movement delay",
  "the snake loopback",
  "the collision zone",
  "the grid movement",
  "the snake speedrun",
  "the classic arcade snake",
  "the snake survival",
  "the endless snake",
  "the growing chain",
  "the pixel collision",
  "the snake frenzy",
  "the wall panic",
  "the snake trajectory",
  "the movement pattern",
  "the snake chaos",
  "the grid escape",
  "the snake overload"
];
const msgMidCookie = [
  "the cookies",
  "the clicker",
  "the bakery",
  "my mouse",
  "the oven",
  "the dough",
  "the upgrade",
  "the cursor",
  "the empire",
  "the farm",
  "the sugar rush",
  "the golden cookie",
  "the grandma army",
  "the baking speed",
  "the cookie storm",
  "the oven heat",
  "the flour chaos",
  "the dough rise",
  "the bakery glitch",
  "the sugar factory",
  "the click chain",
  "the auto clicker",
  "the cookie stack",
  "the bakery boost",
  "the oven overload",
  "the sweet empire",
  "the bakery madness",
  "the cookie flood",
  "the baking loop",
  "the sugar machine",
  "the cookie grinder",
  "the dough machine",
  "the bakery expansion",
  "the cookie economy",
  "the flour storm",
  "the cookie rush",
  "the upgrade spam",
  "the baking glitch",
  "the cookie reactor",
  "the sugar burst",
  "the oven overload system",
  "the cookie click chain reaction",
  "the bakery simulator",
  "the dough empire rise",
  "the cookie multiplier",
  "the sugar click frenzy",
  "the bakery automation",
  "the cookie inflation",
  "the oven meltdown",
  "the cookie overload",
  "the baking apocalypse",
  "the cookie factory overload",
  "the dough click loop",
  "the sugar stack overflow",
  "the cookie dimension",
  "the bakery universe",
  "the infinite cookie engine",
  "the click economy collapse",
  "the cookie singularity"
];

const msgEnd = [
"too fast","insane","broken","OP","funny","lagging","crazy","lol","help","why",
"no stop","gg","dead","alive","bugged","classic","2005 vibes","peak","unreal","chaos"
];

/* MESSAGE BUILDER */
function buildMessage(){

  const base = msgStart[Math.floor(Math.random()*msgStart.length)];

  let midPool = currentGame === "snake" ? msgMidSnake : msgMidCookie;

  const midPart = midPool[Math.floor(Math.random()*midPool.length)];
  const end = msgEnd[Math.floor(Math.random()*msgEnd.length)];

  // random chance off-topic
  if(Math.random() < 0.15){
    return base + " " + "random thought " + end;
  }

  return base + " " + midPart + " " + end;
}

/* CHAT */
function generateChat(){

  const chat = document.getElementById("chat");
  chat.innerHTML = "";

  for(let i=0;i<160;i++){

    const div = document.createElement("div");
    div.className = "msg";

    const name = nameGen();
    const msg = buildMessage();

    div.innerHTML = `<span style="color:${randColor()}">${name}</span>: ${msg}`;

    chat.appendChild(div);
  }
}

/* LIVE CHAT SPAM */
function startChatSpam(){

  setInterval(() => {

    const chat = document.getElementById("chat");
    if(!chat) return;

    const div = document.createElement("div");
    div.className = "msg";

    const name = nameGen();
    const msg = buildMessage();

    div.innerHTML = `<span style="color:${randColor()}">${name}</span>: ${msg}`;

    chat.appendChild(div);

    chat.scrollTop = chat.scrollHeight;

  }, 400);
}

/* OLD FORUM COLORS */
function randColor(){
  const colors = ["#cc0000","#0000cc","#008800","#990099","#333333","#ff6600"];
  return colors[Math.floor(Math.random()*colors.length)];
}