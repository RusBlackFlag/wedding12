import Logo from '../assets/images/logo.png'
function Sidebar() {
  const smoothScrollTo = (target) => {
    const element = document.getElementById(target);
    if (element) {
      window.scrollTo({
        behavior: 'smooth',
        top: element.offsetTop,
      });
    }
  };

  const handleMenuClick = (e, target) => {
    e.preventDefault();
    smoothScrollTo(target);
  };

  return (
    <>
      <aside id='oliven-aside'>
        <div className='oliven-logo'>
          <a href='/'>
            <img src={Logo} alt='' />
            <span>
            Алина <small>&</small> Александр
            </span>
            <h6>07.09.2024</h6>
          </a>
        </div>
        <nav className='oliven-main-menu' onClick={(e) => e.stopPropagation()}>
          <ul>
            <li>
              <a href='#home' onClick={(e) => handleMenuClick(e, 'home')}>Главная</a>
            </li>
            <li>
              <a href='#couple' onClick={(e) => handleMenuClick(e, 'couple')}>Невеста & Жених</a>
            </li>
            <li>
              <a href='#organization' onClick={(e) => handleMenuClick(e, 'organization')}>Расписание</a>
            </li>
            <li>
              <a href='#rsvp' onClick={(e) => handleMenuClick(e, 'rsvp')}>Ваш ответ</a>
            </li>
          </ul>
        </nav>
        <div className='footer1'>
          {' '}
          <span className='separator'></span>
          <p>
            Алина & Александр
            <br />
            07 Сентября 2024, Барнаул
          </p>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;