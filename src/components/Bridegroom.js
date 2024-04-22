import React from 'react'
import Bride from '../assets/images/bride1.jpg'
import Groom from '../assets/images/groom1.jpg'
function Bridegroom () {
  return (
    <div id='couple' className='bridegroom clear section-padding bg-pink'>
      <div className='container'>
        <div className='row mb-60'>
          <div className='col-md-6'>
            <div
              className='item toright mb-30 animate-box'
              data-animate-effect='fadeInLeft'
            >
              <div className='img'>
                {' '}
                <img src={Bride} alt='' />{' '}
              </div>
              <div className='info valign'>
                <div className='full-width'>
                  <h6>
                    Алина Бутина <i className='ti-heart'></i>
                  </h6>{' '}
                  <span>Невеста</span>
                  <p>
                  Когда я встретила тебя, я почувствовала, что нашла свое истинное счастье.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div
              className='item mb-30 animate-box'
              data-animate-effect='fadeInRight'
            >
              <div className='img'>
                {' '}
                <img src={Groom} alt='' />{' '}
              </div>
              <div className='info valign'>
                <div className='full-width'>
                  <h6>
                    Александр Кузнецов <i className='ti-heart'></i>
                  </h6>{' '}
                  <span>Жених</span>
                  <p>
                  Наши пути пересеклись и я понял, что моя жизнь не будет такой же без тебя.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='row'>
          <div
            className='col-md-12 text-center animate-box'
            data-animate-effect='fadeInUp'
          >
            <h3 className='oliven-couple-title'>Мы женимся!</h3>
            <h4 className='oliven-couple-subtitle'>
              Сентябрь 07, 2024 — Барнаул
            </h4>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Bridegroom
