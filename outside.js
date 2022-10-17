const manager = '송원준';
const sunny = App.loadSpritesheet('sunny.png', 649, 400, [0], 16);
const cloud = App.loadSpritesheet('cloud.png', 649, 400, [0], 16);

// onJoinPlyaer player가 접속했을 때 Event 발생
App.onJoinPlayer.Add(function (player) {
  var name = player.name;
  App.httpPostJson(
    'https://g7799c5a0f64bf7-zep.adb.ap-seoul-1.oraclecloudapps.com/ords/zep/conn/new',
    {},
    {
      NAME: name,
    },
    (res) => {
      App.sayToAll('갱신 완료');
    }
  );
  App.showCenterLabel(
    '안녕하십니까? *' +
      name +
      '* 고객님 부산은행 메타버스 공간에 오신 것을 환영합니다.'
  );
  if (name.includes(manager)) {
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
  if (name.includes(manager) && text == 'speed up') {
    player.moveSpeed = 200;
  }
  if (name.includes(manager) && text == 'speed down') {
    player.moveSpeed = 100;
  }
  if (
    (name.includes(manager) || name.includes('서상용')) &&
    text.includes('*공지*')
  ) {
    App.showCenterLabel(text);
  }
  player.sendUpdated();
});

App.addOnTileTouched(100, 60, function (player) {
  App.httpPostJson(
    'https://g7799c5a0f64bf7-zep.adb.ap-seoul-1.oraclecloudapps.com/ords/zep/post/update',
    {},
    {
      NAME: player.name,
    },
    (res) => {
      App.sayToAll('+ 1 점');
    }
  );
});

App.addOnTileTouched(30, 60, function (player) {
  App.httpPostJson(
    'https://g7799c5a0f64bf7-zep.adb.ap-seoul-1.oraclecloudapps.com/ords/zep/post/update',
    {},
    {
      NAME: player.name,
    },
    (res) => {
      App.sayToAll('+ 1 점');
    }
  );
});

App.addOnTileTouched(70, 50, function (player) {
  App.httpPostJson(
    'https://g7799c5a0f64bf7-zep.adb.ap-seoul-1.oraclecloudapps.com/ords/zep/post/update',
    {},
    {
      NAME: player.name,
    },
    (res) => {
      App.sayToAll('+ 1 점');
    }
  );
});
