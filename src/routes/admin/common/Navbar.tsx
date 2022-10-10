import * as React from 'react';
import Services from './icons/Services';
import Download from './icons/Download';
import FormText from './icons/FormText';
import { StyledNavbar, INavProps } from './Navbar.styles';
import { useSnapshot } from 'valtio';
import { state, switcher } from './store';

function Navbar(props: INavProps) {
  const snap = useSnapshot(state);
  const snap2 = useSnapshot(switcher);
  const { setOption } = snap;
  const { reverse } = snap2;


  return (
    <>
      <StyledNavbar {...props}>
        <div className='nav'>
          {Array.isArray(props.options) && props.options.map((item, index) => (
            <div className='nav__item' key={index}>
              <div className='nav__icon'>{item.icon}</div>
              <div>
                <button
                  className='nav__button'
                  onClick={() => {
                    setOption(item.option);
                    reverse();
                  }}
                >
                  <a className='nav__link'>{item.option && item.option}</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </StyledNavbar>
    </>
  );
}
export default Navbar;
