import React from 'react'
import './Script11.js'

function RSVP() {
  return (
    <div
      id='rsvp'
      className='section-padding bg-img bg-fixed'
    >
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6 bg-white p-40'>
            {' '}
            <span className='oliven-title-meta text-center'>Вы будете присутствовать?</span>
            {/* <br /> */}
            <h2 className='oliven-title text-center'>Ваш ответ</h2>
            <br />
            <form action="https://formspree.io/f/xvoekjgz" method='POST' className='row'>
              <div className='col-md-12'>
                <div className='form-group'>
                  <input
                    type='text'
                    name='FIO'
                    className='form-control'
                    placeholder='Ф.И.О'
                    required
                  />{' '}
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <input type='text' name='Phonenumber' className='form-control' placeholder='Номер телефона' />{' '}
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <input
                    type='text'
                    name='NumberOfGuests'
                    className='form-control'
                    placeholder='Кол-во гостей'
                  />{' '}
                </div>
              </div>

              <div className='col-md-12'>
                <div className='form-group'>
                  <div className='select-btn'>
                    <span className='btn-text'>Какой алкоголь вы предпочитаете?</span>
                    <span className='arrow-dwn'>
                      <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                        <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                      </svg>
                    </span>
                  </div>

                  <ul className='list-items'>
                    <li className='item-alco'>
                      <label className='label-alco'>
                        <span className='input-alco'>
                          <input type='checkbox' name='Whiskey' />
                        </span>
                        <span className='item-text'>Виски</span>
                      </label>
                    </li>

                    <li className='item-alco'>
                      <label className='label-alco'>
                        <span className='input-alco'>
                          <input type='checkbox' name='Moonshine' />
                        </span>
                        <span className='item-text'>Самогон</span>
                      </label>
                    </li>

                    <li className='item-alco'>
                      <label className='label-alco'>
                        <span className='input-alco'>
                          <input type='checkbox' name='Vodka' />
                        </span>
                        <span className='item-text'>Водка</span>
                      </label>
                    </li>

                    <li className='item-alco'>
                      <label className='label-alco'>
                        <span className='input-alco'>
                          <input type='checkbox' name='Wine' />
                        </span>
                        <span className='item-text'>Вино</span>
                      </label>
                    </li>

                    <li className='item-alco'>
                      <label className='label-alco'>
                        <span className='input-alco'>
                          <input type='checkbox' name='Champagne' />
                        </span>
                        <span className='item-text'>Шампанское</span>
                      </label>
                    </li>
                  </ul>



                  {/* <ul className='list-items'>
                    <li className='item-alco'>
                      <span className='checkbox'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512" className='check-icon'>
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                        </svg>
                      </span>
                      <span className='item-text'>Виски</span>
                    </li>

                    <li className='item-alco'>
                      <span className='checkbox'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512" className='check-icon'>
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                        </svg>
                      </span>
                      <span className='item-text'>Самогон</span>
                    </li>

                    <li className='item-alco'>
                      <span className='checkbox'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512" className='check-icon'>
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                        </svg>
                      </span>
                      <span className='item-text'>Водка</span>
                    </li>

                    <li className='item-alco'>
                      <span className='checkbox'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512" className='check-icon'>
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                        </svg>
                      </span>
                      <span className='item-text'>Вино</span>
                    </li>

                    <li className='item-alco'>
                      <span className='checkbox'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512" className='check-icon'>
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                        </svg>
                      </span>
                      <span className='item-text'>Шампанское</span>
                    </li>
                  </ul> */}
                </div>
              </div>

              <div className='col-md-12'>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    cols='30'
                    rows='7'
                    className='form-control'
                    placeholder='Комментарий'
                  ></textarea>
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <input type='submit' className='btn buttono' value='Отправить' />{' '}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RSVP