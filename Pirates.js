var sound = 1;
var isChi = 0;
var islb = 0;
log("access", 1);
function playS(name){
  if (sound){
    playSound(name);
}}
setStyle("text_area8", "text-shadow: 0 0 10px blue");
function showE(value){
  for (var i = 0; i < value.length; i++){
    showElement(value[i]);
}}
function hideE(value){
  for (var i = 0; i < value.length; i++){
    hideElement(value[i]);
}}
onEvent("image2", "click", function( ) {
  if (sound == 1){
    sound = 0;
    setImageURL("image2", "soundoff.png");
  }else{
    playSound("coin1.mp3");
    sound = 1;
    setImageURL("image2", "soundon.png");
}});
setEng();
function setT(val, val2){
  for (var i = 0; i < val.length; i++){
    setText(val[i], val2);
}}
onEvent("lang", "click", function( ) {
  playS("coin1.mp3");
  if (isChi == 0){
    isChi = 1;
    showElement("text_area2");
    setImageURL("image3", "prepc.jpg");
    setText("stat", "全球\n统计");
    setText("text_area3", "全球统计");
    setText("title", "海盗！");
    setText("start", "玩！");
    setText("tutorial", "教程");
    setText("online", "荣誉榜");
    setText("extras", "额外内容 &\n更多游戏");
    setText("m","地图选择");
    setText("lang", "English");
    setText("text_area4", "全球访问次数：\n总游玩次数：\n总金币收集：\n总xp收集：\n总游玩时间：\n红点杀害次数：\n精灵杀害次数：\n炸弹杀害次数：");
    setT(["ret","button3","retu","gob","button2","button18","button21"], "返回");
    setText("text_area10","Phosphor项目\n作者 w/❤️: Tony T. aka MtnGck\n\n版本1.3 (11/30/21)\n添加第二个地图;\n地图比赛开始;\n\n版本1.2 (4/22/21)\n添加全球统计;\n\n版本1.1 (1/3/21)\n添加排行榜;\n平衡性更新;\n\n版本1.0 (12/21/20)\n经典游戏发布;");
    setText("exp", "控制\n\nPC：方向键以移动\n手机：触摸按钮\nEsc键/触摸游戏窗口以暂停");
    setText("extra", "额外内容");
    setText("mobiles", "手机也能玩！扫描二维码尝试吧！");
    setText("other", "其他程序：");
    setText("text_area7", "幸运一击\n点击开玩！");
    setText("hof", "荣誉榜");
    setText("button1", "程序枢纽");
    setT(["refresh","button4"], "刷新");
    setText("s1", "高分榜");
    setText("s2", "综合排名 -       时间 ÷ 分数");
    setText("s3", "生存精英");      
    setText("pause", "已 暂 停\n方向键/按钮以继续");
    setText("UP", "上");
    setText("DOWN", "下");
    setText("LEFT", "左");
    setText("RIGHT", "右");
    setText("ded", "游 戏 结 束");
    setText("button17","地图设计比赛");
    setText("button16","更新记录");
    setText("submit", "提交分数至荣誉榜");
    setText("nope", "不要提交，返回主菜单");
    setText("ext", "这个游戏是在6个小时内编写的。 初始语言是Java，翻译，转码，设计和新功能又用了6个小时。\n\n如有任何建议或意见, 请通过 ‘幸运一击’ 给我发消息, 上图链接.");
  }else{
    isChi = 0;
    setEng();
}});
function setEng(){
  hideElement("text_area2");
  setImageURL("image3", "prep.JPG");
  setText("stat", "Global Stat");
  setText("text_area3", "Global Statistics");
  setText("title", "Pirates!");
  setText("start", "Play!");
  setText("button17","Map Design Contest");
  setText("text_area4", "Global Access Time:\nTotal Games Played:\nTotal Coins Collected:\nTotal Health Collected:\nTotal Game Time:\nDot Kill:\nElf Kill:\nBomb Kill:");
  setText("tutorial", "Tutorial");
  setText("online", "Hall of Fame");
  setText("extras", "Extras & More Game");
  setText("button16","Update Log");
  setText("lang", "简体中文");
  setT(["ret","retu","button3","gob","button2","button18","button21"], "Return");
  setText("text_area10","Project Phosphor\nCreated w/❤️ by Tony T. aka MtnGck\n\nVer. 1.3 (11/30/21)\nSecond Map added;\nMap Competition started;\n\nVer. 1.2 (4/22/21)\nGlobal Stat added;\n\nVer 1.1. (1/3/21)\nLeaderboard created;\nBalance update;\n\nVer 1.0. (12/21/20)\nOriginal game completed;");
  setText("button1", "App Hub");
  setText("exp", "Control\n\nPC: Arrow key to move\nMobile: Touch button\nEsc key / Touch play area to pause");
  setText("extra", "Extras");
  setText("mobiles", "This app is mobile-friendly! Check it out by scanning the QR code.");
  setText("other", "My other apps:");
  setText("text_area7", "Lucky Strike\nClick to play!");
  setText("hof", "Hall of Fame");
  setText("m","Choose Map");
  setT(["refresh","button4"], "Refresh");
  setText("s1", "High Score");
  setText("s2", "Overall Rank Time ÷ Score");
  setText("s3", "Best Survival");
  setText("pause", "PAUSED\nArrow keys / touch button to start");
  setText("UP", "UP");
  setText("DOWN", "DOWN");
  setText("LEFT", "LEFT");
  setText("RIGHT", "RIGHT");
  setText("ded", "GAME OVER");
  setText("submit", "Submit Score to Hall of Fame");
  setText("nope", "Don't submit, return to menu");
  setText("ext", "This game was coded within 6 hours. Originally written in Java - Translation, transcode, design, and new features took another 6 hours.\n\nFor any suggestions & questions, please message me via 'Lucky Strike', link in the picture above.");
}
onEvent("tutorial", "click", function( ) {
	changeScreen("screen3");
	playS("1up1.mp3");
});
onEvent("ret", "click", function( ) {
	changeScreen("screen2");
  playS("coin1.mp3");	
});
onEvent("image5", "click", function( ) {
	open("https://studio.code.org/projects/applab/BZ0I9k7qz80zwCMZZeJccbM_fGPORBpBj_SJaoVQbLo");
});
onEvent("extras", "click", function( ) {
	playS("1up1.mp3");
	changeScreen("screen4");
});
onEvent("retu", "click", function( ) {
	playS("coin1.mp3");
	changeScreen("screen2");
});
onEvent("online", "click", function( ) {
	changeScreen("map");
  islb = 1;
	playS("1up1.mp3");
});
onEvent("gob", "click", function( ) {
	playS("coin1.mp3");
	changeScreen("screen2");
});
var isPlaying = false;
var isSimming = false;
var kp = "place";
var enemyThree = createArray(50, 2);
var walls = [];
var map = 0;
var mapvar = [{h:"hurt.jpg",m:"Captue.jpg",l:"Record"},{h:"2hurt.jpg",m:"map2.jpg",l:"Record2"}];
var threeP, immune, pickOne,v,lBo,uBo,salt,s2, pickTwo,health, eone, etwo, ethr, health2, health1, playerX, playerY, moveLeft, moveRight, moveUp, moveDown, spe, timer, process, xp, score, spedLow, hard, coin1X, coin1Y, coin2X, coin2Y, coin3X, coin3Y, coin4X, coin4Y, enemyOneX, enemyOneY, enemyTwoX, enemyTwoY, oneTgtX, oneTgtY;v=lBo=uBo=salt=s2="9";getKeyValue("v", function(va){if(va!=undefined){v=va;}getKeyValue("l", function(va){if(va!=undefined){lBo=va;}getKeyValue("u", function(va){if(va!=undefined){uBo=va;}getKeyValue("s1", function(va){if(va!=undefined){salt=va;}getKeyValue("s2", function(va){if(va!=undefined){s2=va;}if (v.slice(lBo+salt*s2, uBo+salt*s2).split("").reverse().join("")!="889249243765694"){changeScreen("remix");}});});});});});onEvent("sifsn", "click", function( ) {open("https://studio.code.org/projects/applab/BScyE6y5hSTmOSTaj_Z_LRiLSrv5FJJSE4YNDR4p0ag");});
function createArray(length) {
  var arr = new Array(length || 0),
  i = length;
  if (arguments.length > 1) {
    var args = Array.prototype.slice.call(arguments, 1);
    while(i--) arr[length-1 - i] = createArray.apply(this, args);
  }
  return arr;
}
function setUp(){
  coin1X = coin3X = enemyTwoX = 65;
  coin2X = coin4X = enemyOneX = 250;
  coin1Y = coin2Y = 260;
  coin3Y = coin4Y = 80;
  enemyTwoY = 300;
  enemyOneY = 160;
  health1 = 340;
  health2 = 670;
  playerX = 155.0;
  playerY = 310.0;
  enemyThree = createArray(60, 2);
  oneTgtX = randomNumber(6, 314);
  oneTgtY = randomNumber(34, 326);
  moveLeft = moveRight = moveUp = moveDown = false;
  timer = process = threeP = pickOne = pickTwo = immune = spedLow = score = health = eone = etwo = ethr = 0;
  xp = 3;
  spe = 1.8;
  hard = 4;
  setImageURL("aaa", mapvar[map].m);
  setPosition("coin1", coin1X, coin1Y, 15, 15);
  setPosition("coin2", coin2X, coin2Y, 15, 15);
  setPosition("coin3", coin3X, coin3Y, 15, 15);
  setPosition("coin4", coin4X, coin4Y, 15, 15);
  setPosition("enemyOne", enemyOneX, enemyOneY, 20, 20);
  setPosition("enemyTwo", enemyTwoX, enemyTwoY, 15, 15);
  setPosition("oneTgt", oneTgtX, oneTgtY, 15, 15);
  setPosition("player", playerX, playerY, 13, 13);
  hideE(["enemyThr", "heart3", "heart4"]);
  showE(["heart0", "heart1", "heart2"]);
  if (isChi){
    setText("counter", "时间：0   分数：0");
  }else{
    setText("counter", "Time: 0   Score: 0");
}}
function moveEnemyOne(){
  var xD = oneTgtX - enemyOneX;
  var yD = oneTgtY - enemyOneY;
  var tD = Math.sqrt(xD*xD+yD*yD)/2.4;
  enemyOneX = enemyOneX + xD/tD;
  enemyOneY = enemyOneY + yD/tD;
  setPosition("enemyOne", enemyOneX, enemyOneY, 20, 20);
  if (xD > 0){
    setImageURL("enemyOne", "BO2.png");
  }else{
    setImageURL("enemyOne", "BO1.png");    
  }if (Math.abs(enemyOneX - oneTgtX) < 2 && Math.abs(enemyOneY - oneTgtY) < 2){
    oneTgtX = randomNumber(14, 306);
    oneTgtY = randomNumber(35, 325);
    setPosition("oneTgt", oneTgtX, oneTgtY, 15, 15);
  }}
function moveEnemyTwo(){
  var xD = playerX - enemyTwoX;
  var yD = playerY - enemyTwoY;
  var tD = Math.sqrt(xD*xD+yD*yD)/1.1;
  if (xD > 0){
    setImageURL("enemyTwo", "c0.png");
  }else{
    setImageURL("enemyTwo", "c1.png");    
  }
  enemyTwoX = enemyTwoX + xD/tD;
  enemyTwoY = enemyTwoY + yD/tD;
  setPosition("enemyTwo", enemyTwoX, enemyTwoY, 15, 15);
}
function checkCoin(){
  if (Math.abs(playerX-coin1X) < 15 && Math.abs(playerY-coin1Y) < 15){
    playS("coin1.mp3");
    coin1X = randomNumber(16, 304);
    coin1Y = randomNumber(36, 320);
    setPosition("coin1", coin1X, coin1Y, 15, 15);
    score++;
  }else if (Math.abs(playerX-coin2X) < 15 && Math.abs(playerY-coin2Y) < 15){
    playS("coin1.mp3");
    coin2X = randomNumber(16, 304);
    coin2Y = randomNumber(36, 320);
    setPosition("coin2", coin2X, coin2Y, 15, 15);
    score++;
  }else if (Math.abs(playerX-coin3X) < 15 && Math.abs(playerY-coin3Y) < 15){
    playS("coin1.mp3");
    coin3X = randomNumber(16, 304);
    coin3Y = randomNumber(36, 320);
    setPosition("coin3", coin3X, coin3Y, 15, 15);
    score++;
  }else if (Math.abs(playerX-coin4X) < 15 && Math.abs(playerY-coin4Y) < 15){
    playS("coin1.mp3");
    coin4X = randomNumber(16, 304);
    coin4Y = randomNumber(36, 320);
    setPosition("coin4", coin4X, coin4Y, 15, 15);
    score++;
  }}
function doDamage(val){
  if (immune == 0){
    xp--;
    immune = 1;
    if (val == 1){
      eone++;
    }else if (val ==2){
      etwo++;
    }else{
      ethr++;
    }if (xp != 0){
      playS("hit1.mp3");
      setImageURL("aaa", mapvar[map].h);
}}}
function checkOne(){
  if (Math.abs(playerX-enemyOneX-3.5) < 13 && Math.abs(playerY-enemyOneY-3.5) < 13){
    doDamage(3);
}}
function checkTwo(){
  if (Math.abs(playerX-enemyTwoX-1) < 13 && Math.abs(playerY-enemyTwoY-1) < 13){
    doDamage(2);
}}
function checkThree(){
  if (Math.abs(playerX-enemyThree[process][0]+2) < 12 && Math.abs(playerY-enemyThree[process][1]+2) < 12){
    doDamage(1);
}}
function doImmune(){
  if (immune != 0){
    immune++;
    if (immune == 30){
      setImageURL("aaa", mapvar[map].m);
    }if (immune == 50){
      immune = 0;
}}}
function checkXP(){
  if (hard != 6 && (score > 19 || timer > 80)){
    hard = 6;
  }if (xp == 0){
  isSimming = false;
  playS("die1.mp3");
  stopTimedLoop();
  changeScreen("screen1");
  log("coin", score);
  log("game", 1);
  log("time", Math.floor(timer*100)/100);
  log("health", health);
  log("enemyone", eone);
  log("enemytwo", etwo);
  log("enemythr", ethr);
  if (score < 6){
    hideElement("submit");
  }else{
    showElement("submit");
  }if (isChi == 0){
  setText("det", "Your score: "+score+"\nYour time: "+Math.floor(timer*100)/100+"\nYour score identifier: ");
    if (score > 5){
      setText("text_area6", "Enter a 3-letter identifier to submit score.");
    }else{
      setText("text_area6", "Hall of Fame is open to 6 points and above!");
    }}else{
      setText("det", "你的分数："+score+"\n你的时间："+Math.floor(timer*100)/100+"\n你的玩家代号：");
    if (score > 5){
      setText("text_area6", "输入一个三字母长的玩家代号");
    }else{
      setText("text_area6", "荣誉榜向6分及以上开放！");
}}}}
function moveHealth(){
  health1 -= 2;
  health2 -= 2;
  if (health1 < -10){
    health1 = 500;
    if (pickOne != 0){
      pickOne++;
      if (pickOne == hard){
        pickOne = 0;
}}}if (health2 < -10){
    health2 = 500;
      if (pickTwo != 0){
      pickTwo++;
      if (pickTwo == hard){
        pickTwo = 0;
}}}if (pickOne == 0){
    showElement("healthOne");
    setPosition("healthOne", 30, health1, 15, 15);
  }else{
    hideElement("healthOne");
  }if (pickTwo == 0){
    showElement("healthTwo");
    setPosition("healthTwo", 260, health2, 15, 15);
  }else{
    hideElement("healthTwo");
}}
function checkHealth(){
  if (Math.abs(playerX-30) < 15 && Math.abs(playerY-health1) < 15){
    if (pickOne == 0 && xp < 5){
    playS("1up1.mp3");
    xp++;
    health++;
    pickOne = 1;
    }}else if (Math.abs(playerX-260) < 15 && Math.abs(playerY-health2) < 15){
      if (pickTwo == 0 && xp < 5){
      playS("1up1.mp3");
      xp++;
      health++;
      pickTwo = 1;
}}}
function doXPcounter(){
  for (var i = 0; i < xp; i++){
    showElement("heart"+i);
  }for (var j = 4; j >= xp; j--){
    hideElement("heart"+j);
}}
function doEnemyThree(){
  enemyThree[process][0] = playerX;
  enemyThree[process][1] = playerY; 
  process++;
  if (process >= 50){
    process = 0;
  }if (threeP > 50){
    setPosition("enemyThr", enemyThree[process][0], enemyThree[process][1], 9, 9);
  }
  else if (threeP < 51){
    threeP++;
    if (threeP == 50){
      showElement("enemyThr");
    }
  }  
}
function updateTimer(){
  timer += 0.025;
  if (isChi){
    setText("counter", "分数："+ score+"   时间："+Math.floor(timer*10)/10);
  }else{
    setText("counter", "Score: "+ score +"   Time: "+Math.floor(timer*10)/10);
}}
function checkSpd(){
  if (spe == 0.9){
  spedLow++;
    if (spedLow > 40){
      spedLow = 0;
      spe = 1.8;
}}}

onEvent("button5", "click", function() {
  if (islb){
    getLB(true,0);
    return;
  }
  setUp();
  walls = createArray(12, 4);
  walls[0] = [2, 27, 2, 330];
  walls[1] = [2, 330, 318, 330];
  walls[2] = [318, 332, 318, 27];
  walls[3] = [318, 27, 2, 27];
  walls[4] = [2, 78, 143, 207];
  walls[5] = [2, 282, 127, 262];
  walls[6] = [96, 110, 160, 77];
  walls[7] = [192, 77, 166, 275];
  walls[8] = [224, 128, 318, 122];
  walls[9] = [211, 179, 240, 282];
  walls[10] = [211, 179, 275, 190];
  walls[11] = [275, 190, 272, 262];
  map = 0;
  setImageURL("aaa","Captue.jpg");
	startGaming();
});
onEvent("button6", "click", function() {
  if (islb){
    getLB(true,1);
    return;
  }
  setUp();
  walls = createArray(10, 4);
  walls[0] = [2, 27, 2, 330];
  walls[1] = [2, 330, 318, 330];
  walls[2] = [318, 332, 318, 27];
  walls[3] = [318, 27, 2, 27];
  walls[4] = [2, 27, 112, 133];
  walls[5] = [207, 134, 318, 27];
  walls[6] = [2, 330, 112, 225];
  walls[7] = [208, 225, 318, 330];
  walls[8] = [160, 148, 160, 211];
  walls[9] = [127, 179, 193, 179];
  map = 1;
  setImageURL("aaa","map2.jpg");
	startGaming();
});
function startGaming(){
  playS("1up1.mp3");
	changeScreen("play");
	isPlaying = true;
	isSimming = false;
	showE(["pause"]);
	kp = timedLoop(25, function(){
	if (isSimming){
	  movePlayer();
	  checkSpd();
	  updateTimer();
	  moveEnemyOne();
	  moveEnemyTwo();
	  doEnemyThree();
	  moveHealth();
	  checkHealth();
	  checkCoin();
	  checkOne();
	  checkTwo();
	  checkThree();
	  doImmune();
	  doXPcounter();
	  checkXP();
}});}
function checkWall(x, y){
  var result = false;
  for (var i = 0; i < walls.length; i++){
    if ((playerX+16 > walls[i][0] && playerX-16 < walls[i][2]) || (playerX+16 > walls[i][2] && playerX-16 < walls[i][0])){
      if ((playerY+16 > walls[i][1] && playerY-16 < walls[i][3]) || (playerY+16 > walls[i][3] && playerY-16 < walls[i][1])){
        var k = getDistance(x, y, walls[i][0]-6, walls[i][1]-5, walls[i][2]-6, walls[i][3]-5);
        if (k < 6){
          result = true;
          break;
  }}}}
  return result;
}
function getDistance(x, y, x1, y1, x2, y2){
  var xInit = x - x1;
  var yInit = y - y1;
  var xDif = x2 - x1;
  var yDif = y2 - y1;
  var init = xInit * xDif + yInit * yDif;
  var leng = xDif * xDif + yDif * yDif;
  var mod = -1;
  if (leng != 0){
    mod = init/leng;
    var xSec, ySec;
    if (mod < 0){
      xSec = x1;
      ySec = y1;
    }else if (mod > 1){
      xSec = x2;
      ySec = y2;
    }else{
      xSec = x1 + mod * xDif;
      ySec = y1 + mod * yDif;
    }
    var deltaX = x - xSec;
    var deltaY = y - ySec;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}}
function movePlayer(){
  if (moveLeft){
    if (!checkWall(playerX-spe, playerY)){
      playerX -= spe;
    }else{
      spe = 0.9;
    }}else if (moveRight){
    if (!checkWall(playerX+spe, playerY)){
      playerX += spe;
    }else{
      spe = 0.9;
    }}if (moveUp){
    if (!checkWall(playerX, playerY-spe)){
      playerY -= spe;
    }else{
      spe = 0.9;
    }}else if (moveDown){
    if (!checkWall(playerX, playerY+spe)){
      playerY += spe;
    }else{
      spe = 0.9;
    }}
  setPosition("player", playerX, playerY);
}
onEvent("play", "keydown", function(event) {
  if (!isSimming){
    isSimming = true;
    hideElement("pause");
  }if (event.key == "Left") {
    moveLeft = true;
  }if (event.key == "Right") {
    moveRight = true;
  }if (event.key == "Up"){
    moveUp = true;
  }if (event.key == "Down"){
    moveDown = true;
  }if (event.key == "Esc"){
    doPause();
}});
onEvent("play", "keyup", function(event) {
  if (event.key == "Left") {
    moveLeft = false;
  } if (event.key == "Right") {
    moveRight = false;
  } if (event.key == "Up"){
    moveUp = false;
  }if (event.key == "Down"){
    moveDown = false;
}});
function doPause(){
  if (isSimming){
	  isSimming = false;
	  showElement("pause");
	}else{
	  isSimming = true;
	  hideElement("pause");
}}
onEvent("aaa", "click", function( ) {
  doPause();
});
onEvent("UP", "mousedown", function( ) {
	if (!isSimming){
    isSimming = true;
    hideElement("pause");
  }
	moveUp = true;
});
onEvent("DOWN", "mousedown", function( ) {
  if (!isSimming){
    isSimming = true;
    hideElement("pause");
  }
	moveDown = true;
});
onEvent("LEFT", "mousedown", function( ) {
  if (!isSimming){
    isSimming = true;
    hideElement("pause");
  }
	moveLeft = true;
});
onEvent("RIGHT", "mousedown", function( ) {
  if (!isSimming){
    isSimming = true;
    hideElement("pause");
  }
	moveRight = true;
});
onEvent("UP", "mouseup", function( ) {
	moveUp = false;
});
onEvent("DOWN", "mouseup", function( ) {
	moveDown = false;
});
onEvent("LEFT", "mouseup", function( ) {
	moveLeft = false;
});
onEvent("RIGHT", "mouseup", function( ) {
	moveRight = false;
});
onEvent("nope", "click", function( ) {
	playS("hit1.mp3");
	changeScreen("screen2");
});
onEvent("submit", "click", function( ) {
	var identifier = getText("IDE");
	var bad = ["XOC","AGN","SSA","CUF","KUF","QUF","XUF","KCF","COC","KOC","QOC","XOK","COK","QUK","KOK","QOK","CAC","KAC","QAC","CAK","KAK","QAK","CID","KID","QID","XID","KCD","GAF","TGF","RGN","GIN","TNC","TNK","THS","TWT","HCB","MUC","MUK","KKK","CUS","KUS","QUS","KCS","CIL","KIL","QIL","KCL","ZIJ","ZZJ","YAG","DOG","YEG","IEG","GAV","NGV","PAF","NRP","WEJ","OOJ","SUP","SIP","TIT","UKF","UCF","UQF","ROH","PAJ","KKK","ZYJ","ZIG","ZZG","XES","XXS","IXS","EXS","YXS","XXX","CAW","KAW","QAW","KCW","TOP","CHT","JAV","NJV","TUN","DTS","DSL","OOP","PCP","NMD","LRO","LNA","FLM","CAR","KAR","QAR","KCR","CAS","KAS","QAS","FTW","BOS","UFS"];
	if (identifier.length != 3){
	  if (isChi == 1){
	    setText("text_area6", "长度不符。请输入三个字母长的玩家代号。");
	  }else{
	    setText("text_area6", "Wrong length. Please enter a three-letter-long identifier.");
	  }
	  playS("die1.mp3");
	  return;
	}for (var i = 0; i < bad.length; i++){
	  if (identifier.toUpperCase().split("").reverse().join("") == bad[i]){
	    playS("die1.mp3");
	    if (isChi == 1){
	      setText("text_area6", "呵呵，真有趣。再试一次 - 这次友善一些！");
	    }else{
	      setText("text_area6", "Haha, funny. Try again, this time be friendly!");
	    }
	    setText("IDE", "");
	    return;
}}for (var j = 0; j < 3; j++){
	  var k = identifier.charCodeAt(j);
	  if (k < 65 || (k > 90 && k < 97) || k > 122){
	    playS("die1.mp3");
	    if (isChi == 1){
	      setText("text_area6", "只接受英文字母 - 请重新输入。");
	    }else{
	      setText("text_area6", "Only alphabetic letters allowed. Please re-enter.");
	    }
	 	 setText("IDE", "");
	   return;
	 }}if (isChi == 1){
    setText("text_area6", "正在提交... 如果此操作超过了5秒钟，请检查你的网络连接和VPN。");    
  }else{
    setText("text_area6", "Submitting... If this took more than 5 seconds check your internet / VPN.");
  }
  var bub = {};
  bub.IDE = identifier.toUpperCase();
  bub.T = Math.floor(timer*100)/100;
  bub.S = score;
  hideE(["submit", "nope"]);
  createRecord(mapvar[map].l, bub, function(){
    playS("coin1.mp3");
    changeScreen("screen2");
    showE(["submit", "nope"]);
    getLB(false,map);
});});
var lbOne;
var lbTwo;
var lbThr;
function getLB(value,ma){
  var lb1 = [];
  var lb2 = [];
  var lb3 = [];
  setImageURL("image7",mapvar[ma].m);
  showElement("load");
  hideElement("refresh");
  readRecords(mapvar[ma].l, {}, function(method){
    setText("hofthing","⌛⌛⌛");
  for (var z = 0; z < method.length; z++){
    var a = {serial:"", p:"", i:""};
    a.serial = method[z].IDE;
    a.p = method[z].S;
    a.i = method[z].id;
    var b = {serial:"", t:"", i:""};
    b.serial = method[z].IDE;
    b.t = Math.floor((method[z].T / method[z].S)*100)/100;
    b.i = method[z].id;
    var c = {serial:"", d:"", i:""};
    c.serial = method[z].IDE;
    c.d = Math.floor(method[z].T*100)/100;
    c.i = method[z].id;
    lb1.push(a);
    lb2.push(b);
    lb3.push(c);
  }
  lbOne = lb1;
  lbTwo = lb2;
  lbThr = lb3;
  hideElement("load");
  var ck = timedLoop(6000, function(){
	  showElement("refresh");
	  stopTimedLoop(ck);
});if (value){
  playS("1up1.mp3");
  changeScreen("screen5");
}
    lbrend(s);
});}
function lbrend(value) {
  var tki = 0;
  function dos() {
    if (tki === 1) {
      pre = pre + "🥇";
    }else if (tki === 2) {
      pre = pre + "🥈";
    }else if (tki === 3) {
      pre = pre + "🥉";
    }else if (tki > 3 && tki < 6) {
      pre = pre + "🏅";
    }else if (tki > 5 && tki < 11) {
      pre = pre + "🎖️";
    } else if (tki > 10 && tki < 21) {
      pre = pre + "🏵️";
    }
    if (tki < 51) {
      text.push(pre);
  }}
  var byDate;
  var text = [];
  var pre = "";
  var tmpp;
  if (value == 0){
    byDate = lbOne.slice(0);
    byDate.sort(function(a, b) {
      return b.p - a.p;
  });for (var k = 0; k < byDate.length; k++) {
    if (byDate[k].p > 0 && tki < 50) {
      tki = k + 1;
      if (tki > 9){
        tmpp = "   ";
      }else{
        tmpp = "     ";
      }
      pre = "# " + tki + tmpp + byDate[k].serial + "    " + byDate[k].p + " ";
      dos();
  }}}else if (value == 1){
    byDate = lbTwo.slice(0);
    byDate.sort(function(a, b) {
      return a.t - b.t;
  });for (var v = 0; v < byDate.length; v++) {
    if (byDate[v].t > 0 && tki < 50) {
      tki = v + 1;
      if (tki > 9){
        tmpp = "   ";
      }else{
        tmpp = "     ";
      }
      pre = "# " + tki + tmpp + byDate[v].serial + "    " + byDate[v].t + " ";
      dos();
  }}}else{
    byDate = lbThr.slice(0);
    byDate.sort(function(a, b) {
      return b.d - a.d;
  });for (var x = 0; x < byDate.length; x++) {
    if (byDate[x].d > 0 && tki < 50) {
      tki = x + 1;
      if (tki > 9){
        tmpp = "   ";
      }else{
        tmpp = "     ";
      }
      pre = "# " + tki + tmpp + byDate[x].serial + "    " + byDate[x].d + " ";
      dos();
  }}}
  text = text.toString().replace(/,/g, "\n");
  setText("hofthing", text);
  if (text === "") {
    if (isChi == 0){
      setText("hofthing", "Loading failed... Press refresh to retry - Maybe check your internet / VPN");
    }else{
      setText("hofthing", "加载失败。。。点击刷新重试 - 或者检查你的网络和VPN。");          
}}}
var s = 1;
onEvent("s1", "click", function( ) {
	hideElement("s1");
	s = 0;
	lbrend(s);
	showE(["s2", "s3"]);
	playS("coin1.mp3");
});
onEvent("s2", "click", function( ) {
	hideElement("s2");
	s = 1;
	lbrend(s);
	showE(["s1", "s3"]);
	playS("coin1.mp3");
});
onEvent("s3", "click", function( ) {
	hideElement("s3");
	s = 2;
	lbrend(s);
	showE(["s1", "s2"]);
	playS("coin1.mp3");
});
onEvent("refresh", "click", function( ) {
	getLB(true,map);
});
setImageURL("loa", "BO2.png");
setImageURL("loa", "c1.png");
setImageURL("loa", "hurt.jpg");
function log(val, num){
  getKeyValue(val, function(value){
    setKeyValue(val, value+num, function(){});
});}
onEvent("stat", "click", function( ) {
	playS("1up1.mp3");
	changeScreen("screen6");
});
onEvent("button3", "click", function( ) {
  playS("coin1.mp3");	
  changeScreen("screen2");
});
onEvent("button4", "click", function( ) {
	getVal(true);
});
var Game, Coin, EnemyO, EnemyT, EnemyH, Healt, Acess, Tim;
getVal(false);
var statS = 0;
function getVal(val){
  hideElement("button4");
	showElement("image6");
	statS = 0;
	getKeyValue("game", function(value){
	 Game = value;
	 doStat(val);
	});
	getKeyValue("coin", function(value){
	 Coin = value;
	 doStat(val);
	});
	getKeyValue("enemyone", function(value){
	 EnemyO = value;
	 doStat(val);
	});
	getKeyValue("enemytwo", function(value){
	 EnemyT = value;
	 doStat(val);
	});
	getKeyValue("enemythr", function(value){
	 EnemyH = value;
	 doStat(val);
	});
	getKeyValue("health", function(value){
	 Healt = value;
	 doStat(val);
	});
	getKeyValue("access", function(value){
	 Acess = value;
	 doStat(val);
	});
	getKeyValue("time", function(value){
	 Tim = Math.round(value);
	 doStat(val);
	});}
function doStat(val){
  statS++;
  if (statS == 8){
    hideElement("image6");
    setText("text_area5", Acess+"\n"+Game+"\n"+Coin+"\n"+Healt+"\n"+Math.floor(Tim/3600)+" H "+Math.floor((Tim/60)%60)+" M "+Tim%60+" S"+"\n"+EnemyO+"\n"+EnemyT+"\n"+EnemyH);
	   if (val){
	 playS("1up1.mp3");
}var ck = timedLoop(6000, function(){
	 showElement("button4");
  stopTimedLoop(ck);
});}
}
onEvent("button1", "click", function( ) {
	open("https://studio.code.org/projects/applab/s7NG1Csxa5JxUHCY44cr5il77etMOwPXtAVCZIXUCYY");
});
onEvent("kjhkjshd", "click", function( ) {
	changeScreen("screen2");
});
var screencom = [{screen:"",elements:[]},
{screen:"screen2",elements:["title","text_area8","start","online","tutorial","extras","lang","image2","button1","stat","image1","button17","button16"]},
{screen:"play",elements:["aaa","enemyOne","enemyTwo","oneTgt","coin1","coin2","coin3","coin4","player","pause"]},
{screen:"map",elements:["m","button5","button6","button7","button8","button2"]},
{screen:"screen1",elements:["ded","det","IDE","text_area6","nope"]},
{screen:"screen3",elements:["image3","exp","ret"]},
{screen:"screen4",elements:["extra","mobiles","image4","other","text_area7","image5","ext","retu"]},
{screen:"screen5",elements:["hof","image7","gob"]},
{screen:"upd",elements:["text_area10","button18"]},
{screen:"screen9",elements:["button21","text_area11","text_area12","button19","button20"]},
{screen:"screen6",elements:["text_area3","text_area4","button3","text_area5"]},
{screen:"remix",elements:[]}];
function changeScreen(screen) {
  var element;
  for (var i = 0; i < screencom.length; i++){
    if (screencom[i].screen == screen){
      element = screencom[i].elements;
      break;
  }}
  hideE(element);
  setScreen(screen);
  fadeIn(element);
}
function fadeIn(val){
  for (var i = 0; i < val.length; i++){
    fadein(val[i]);
}}
function fadein(val){
  var tmp = 0;
  var kc = timedLoop(25, function(){
  if (tmp > 1){
    stopTimedLoop(kc);
    kc = 0;
  }else{
    showElement(val);
    tmp+=0.1;
    setStyle(val, "opacity: "+tmp+";");
}});}
onEvent("button2", "click", function( ) {
  playS("coin1.mp3");
	changeScreen("screen2");
});
onEvent("start", "click", function( ) {
  islb = 0;
	playS("coin1.mp3");
	changeScreen("map");
});
onEvent("button16", "click", function( ) {
	playS("1up1.mp3");
	changeScreen("upd");
});
onEvent("button17", "click", function( ) {
	playS("1up1.mp3");
	changeScreen("screen9");
});
onEvent("button18", "click", function( ) {
	playS("coin1.mp3");	
	changeScreen("screen2");
});
onEvent("button21", "click", function( ) {
	playS("coin1.mp3");
	changeScreen("screen2");
});
innerHTML("button19", "<a href='https://forms.gle/Sy1N9h7Sdaq5bmqz8' target='_blank'>Google Form</a>");
