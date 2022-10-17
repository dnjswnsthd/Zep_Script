// Zep Script
const manager = '송원준';
const manager_seo = '서상용';
// const sunny = App.loadSpritesheet('sunny.png', 649, 400, [0], 16);
// const cloud = App.loadSpritesheet('cloud.png', 649, 400, [0], 16);

// onJoinPlyaer player가 접속했을 때 Event 발생
App.onJoinPlayer.Add(function (player) {
  var name = player.name;
  if (name.includes(manager)) {
    player.moveSpeed = 200;
    player.title = 'VIP실 상담원';
    player.attackType = 2;
    player.sendUpdated(); // 적용 Player Event 적용
  }
  if (name.includes(manager_seo)) {
    player.moveSpeed = 100;
    player.title = 'BNK 인사부 상담원';
    player.sendUpdated();
  }
  // Map.putObject(5, 35, sunny);
  // Map.moveObject(5, 35, 100, 35, 34);
});

App.onSay.Add(function (player, text) {
  var name = player.name;
  if (
    (name.includes(manager) || name.includes(manager_seo)) &&
    text == 'speed up'
  ) {
    player.moveSpeed = 200;
  }
  if (
    (name.includes(manager) || name.includes(manager_seo)) &&
    text == 'speed down'
  ) {
    player.moveSpeed = 100;
  }
  if (name.includes(manager) && text.includes('speed change')) {
    player.moveSpeed = text.split(' ')[2];
  }
  if (name.includes(manager) && text.includes('*공지*')) {
    App.showCenterLabel(text);
  }
  player.sendUpdated();
});

// App.addOnKeyDown(81, function (player) {
//   App.httpPostJson(
//     'https://g7799c5a0f64bf7-zep.adb.ap-seoul-1.oraclecloudapps.com/ords/zep/conn/new',
//     {},
//     {
//       NAME: player.name,
//     },
//     (res) => {
//       App.sayToAll('저장완료');
//     }
//   );
// });

// App.onPlayerTouched.Add(function (player) {
//   if (player.name == manager) {
//     player.showCustomLabel('충돌발생');
//   }
// });
