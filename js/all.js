
function clockNumber() {
  // DOM
  const clockNumber = document.querySelector('.clock-number');

  // time
  let nowTime = new Date();
  let twelve = '';
  let hh = nowTime.getHours();
  let mm = nowTime.getMinutes();
  let ss = nowTime.getSeconds();

  // 電子鐘
  hh = checkHours(hh);
  mm = checkTime(mm);
  ss = checkTime(ss);

  // 電子鐘 補 0
  function checkTime(i) {
    if (i < 10) {
      i = '0' + i
    }
    return i
  }

  // 電子鐘 AM 與 PM
  function checkHours(i) {
    if (hh > 12) {
      if (hh === 24) {
        i = 'i' + 0
      } else {
        i = i - 12
      }
      twelve = 'PM'
    } else {
      if (hh < 10) {
        i = '0' + i
      }
      twelve = 'AM'
    }
    return i
  }

  // 電子鐘字串
  clockNumber.textContent = `${twelve} ${hh} : ${mm} : ${ss}`;
}

function clock() {
  // DOM
  const hourHand = document.querySelector('.hour-hand');
  const minuteHand = document.querySelector('.minute-hand');
  const secondHand = document.querySelector('.second-hand');

  // time
  let nowTime = new Date();
  let hh = nowTime.getHours();
  let mm = nowTime.getMinutes();
  let ss = nowTime.getSeconds();

  // 計算每秒移動多少角度
  // 指針
  let hourDeg = (hh * 30 + mm * (30 / 60) - 90);

  // 分針
  let minuteDeg =( mm * 6 + ss * (6 / 60) - 180);

  // 秒針: (秒數 x 每秒 + 6 度 ) - 90度 (基準在 90 度的位置)
  let secondDeg = (ss * 6) - 180;

  // 加入 Class
  hourHand.style.transform = `rotate(${hourDeg}deg)`
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`
  secondHand.style.transform = `rotate(${secondDeg}deg)`

}


setInterval(clockNumber, 1000) // 電子鐘
setInterval(clock, 1000) // 時鐘
