
function clock() {  
  // DOM
  const clockNumber = document.querySelector('.clock-number')

  // time
  let nowTime = new Date();
  let twelve = '';
  let hh = nowTime.getHours();
  let mm = nowTime.getMinutes();
  let ss = nowTime.getSeconds();

  hh = checkHours(hh);
  mm = checkTime(mm);
  ss = checkTime(ss);

  // 補 0
  function checkTime(i) {
    if(i < 10) {
      i = '0' + i
    }
    return i
  }

  // AM 與 PM
  function checkHours(i) {
    if ( hh > 12 ) {
      if ( hh === 24) {
        i = 'i' + 0
      } else {
        i = i - 12
      }
      twelve = 'PM'
    } else {
      if ( hh < 10 ) {
        i = '0' + i
      }
      twelve = 'AM'
    }
    return i
  }

  // 電子鐘字串
  clockNumber.textContent = `${twelve} ${hh} : ${mm} : ${ss}`;
}


setInterval( clock, 1000)
