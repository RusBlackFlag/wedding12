import React from 'react'

function Organization () {
  return (
    <div id='organization' className='organization section-padding bg-pink'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            <span className='oliven-title-meta'>Свадьба</span>
            <h2 className='oliven-title'>Расписание</h2>
          </div>
        </div>
        <div className='row bord-box bg-img' data-background='images/slider.jpg'>
          <div className='col-md-3 item-box'>
            <h2 className='custom-font numb'>01</h2>
            <h6 className='title'>Регистрация брака</h6>
            <p>
             Регистрация брака будет проходить с 14:20 до 14:40 во Дворце Бракосочетания по адресу: г.Барнаул, пр. Ленина, 11.
            </p>
          </div>
          <div className='col-md-3 item-box'>
            <h2 className='custom-font numb'>02</h2>
            <h6 className='title'>Банкет</h6>
            <p>
              Наша свадьба будет проходить в банкетном зале "Версаль" по адресу: г.Барнаул, ул. Интернациональная, 116.<br />
              Сбор гостей в 16:30<br />
              Начало банкета в 17:00
            </p>
          </div>
          {/* <div className='col-md-3 item-box'>
            <h2 className='custom-font numb'>03</h2>
            <h6 className='title'>Party</h6>
            <p>
              Delta tristiu the jusone duise vitae diam neque nivami mis est
              augue artine aringilla the at elit finibus vivera.
            </p>
          </div>
          <div className='col-md-3 item-box'>
            <h2 className='custom-font numb'>04</h2>
            <h6 className='title'>Cake Cutting</h6>
            <p>
              Delta tristiu the jusone duise vitae diam neque nivami mis est
              augue artine aringilla the at elit finibus vivera.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Organization
