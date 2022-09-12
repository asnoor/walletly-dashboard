import React from 'react'
import ReactTooltip from 'react-tooltip';
import '../assets/css/Sidebar.css'
import logo from '../assets/images/logo.png'
import dashboard from '../assets/images/dashboard.svg'
import Audience from '../assets/images/Audience.svg'
import Loyality from '../assets/images/Loyality.svg'
import Communication from '../assets/images/Communication.svg'
import wallet from '../assets/images/wallet.svg'
import Setting from '../assets/images/Setting.svg'
import arrow from '../assets/images/arrow.svg'
import BrandDropdown from './BrandDropdown';
export default function Sidebar() {
  return (
    <div id='sidebar'>
        <div className='partialSidebar'>
            <div className='pSide'>
                <div>
                    <img data-tip='logo' className='logo' src={logo} alt='logo' height={28} width={28}></img>
                    <img className='arrow' src={arrow}></img> 
                </div>
                <div> <BrandDropdown /></div> 
               
            </div>
            <nav className='navPartial'>
                <div data-tip='Dashboard' className='NavselectedItems'>
                    <a  className='middle'>
                        <div className='middle active'>
                            <img src={dashboard} height={22} width={22}></img>
                        </div>
                        
                    </a>
                </div>
                <div data-tip='Audience' className='NavselectedItems'>
                    <a  className='middle'>
                        <div className='middle active'>
                            <img src={Audience} height={22} width={22}></img>
                        </div>   
                    </a>
                    <div className='line'></div>
                </div>
                <div data-tip='Loyality' className='NavselectedItems'>
                    <a  className='middle'>
                        <div className='middle active'>
                            <img src={Loyality} height={22} width={22}></img>
                        </div> 
                    </a>
                </div>
                <div data-tip='Communication' className='NavselectedItems'>
                    <a  className='middle'>
                        <div className='middle active'>
                            <img src={Communication} height={22} width={22}></img>
                        </div>   
                    </a>
                    <div className='line'></div>
                </div>
                <div data-tip='Wallet-scan' className='NavselectedItems'>
                    <a  className='middle'>
                        <div className='middle active'>
                            <img src={wallet} height={22} width={22}></img>
                        </div>   
                    </a>
                    <div className='line'></div>
                </div>
                <div data-tip='Setting' className='NavselectedItems'>
                    <a  className='middle'>
                        <div className='middle active'>
                            <img src={Setting} height={22} width={22}></img>
                        </div> 
                    </a>
                </div>
            </nav>
            <div className='userProfileIcon col-12'>
                <div className='profile'>ak</div>
            </div>
        </div>
    </div>
  )
}
