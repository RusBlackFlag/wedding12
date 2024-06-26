import React, { useEffect } from 'react'

function Countdown () {
  useEffect(() => {
    // Проверка на устройствах iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) &&
                  !window.MSStream; // Дополнительная проверка для исключения браузера IE на Windows

    // Динамическая установка background-attachment в зависимости от устройства
    if (isIOS) {
      document.getElementById('countdown').style.backgroundAttachment = 'scroll';
    }

    (function () {
      const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;
      let birthday = "Sep 7, 2024 00:00:00",
          countDown = new Date(birthday).getTime(),
          x = setInterval(function() {    
            let now = new Date().getTime(),
                distance = countDown - now;
    
            document.getElementById("days").innerText = Math.floor(distance / (day));
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour));
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute));
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
    
            //do something later when date is reached
            if (distance < 0) {
              let headline = document.getElementById("headline"),
                  countdown = document.getElementById("countdown"),
                  content = document.getElementById("content");
    
              headline.innerText = "It's our wedding!";
              countdown.style.display = "none";
              content.style.display = "block";
    
              clearInterval(x);
            }
            //seconds
          }, 0);
          return null;
      }());
  }, [])
  return (
    <div
      id='countdown'
      className='section-padding bg-img bg-fixed'
      data-background='images/banner-3.jpg'
    >
      <div className='container'>
        <div className='row'>
          <div className='section-head col-md-12'>
            <h4>Мы станем семьей через</h4>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <ul>
              <li>
                <span id='days'></span>Дней
              </li>
              <li>
                <span id='hours'></span>Часов
              </li>
              <li>
                <span id='minutes'></span>Минут
              </li>
              <li>
                <span id='seconds'></span>Секунд
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Countdown
