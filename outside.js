const sunny = App.loadSpritesheet('sunny.png', 649, 400, [0], 16);
const cloud = App.loadSpritesheet('cloud.png', 649, 400, [0], 16);

// onJoinPlyaer player가 접속했을 때 Event 발생
App.onJoinPlayer.Add(function (player) {
  var name = player.name;
  App.showCenterLabel(
    '안녕하십니까? *' +
      name +
      '* 고객님 부산은행 메타버스 공간에 오신 것을 환영합니다.'
  );
  if (name == '송원준') {
    player.moveSpeed = 200;
    player.title = 'BNK 인사부 상담원';
    player.attackType = 2;
    player.sendUpdated();
  }
  // sunny img를 5,35좌표에서 100, 35좌표로 34동안 이동시킨다.
  Map.putObject(5, 35, sunny);
  Map.moveObject(5, 35, 100, 35, 34);
});

App.onSay.Add(function (player, text) {
  var name = player.name;
  if (name == '송원준' && text == 'speed up') {
    player.moveSpeed = 200;
  }
  if (name == '송원준' && text == 'speed down') {
    player.moveSpeed = 100;
  }
  if (name == '송원준' && text.includes('*공지*')) {
    App.showCenterLabel(text);
  }
  player.sendUpdated();
});
