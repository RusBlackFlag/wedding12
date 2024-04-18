import React from 'react'

function ColorsPage() {
    return (
        <div id='colorspage' className='section-padding-dresscode bg-img bg-fixed bg-pink'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-6 bg-white'>
                        <div className='colors-container'>
                            <span className='oliven-title-meta text-center colors-title'>Дресс-код</span>
                            <span className='oliven-title text-center colors-text'>Для нас самое главное - ваше присутствие!<br />
                                Мы будем очень благодарны, если при выборе нарядов <br /> вы поддержите палитру нашей свадьбы</span>
                            <div className='color-circles'>
                                <div className='color-circle' style={{ backgroundColor: '#e1d5bf' }}></div>
                                <div className='color-circle' style={{ backgroundColor: '#b4a794' }}></div>
                                <div className='color-circle' style={{ backgroundColor: '#afc7b1' }}></div>
                                <div className='color-circle' style={{ backgroundColor: '#758676' }}></div>
                                <div className='color-circle' style={{ backgroundColor: '#716b6b' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ColorsPage