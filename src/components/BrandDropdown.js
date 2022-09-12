import React from 'react'
import '../assets/css/BrandDropdown.css'
import logo from '../assets/images/logo.png'
import plus from '../assets/images/plus.svg'
import drink from '../assets/images/drink.png'
import mcDonalds from '../assets/images/mcDonalds.png'
import customerCheckout from '../assets/images/customerCheckout.png'
import cloudWaitress from '../assets/images/cloudWaitress.png'
import testBrand from '../assets/images/testBrand.png'
import LionFish from '../assets/images/LionFish.png'
import nandos from '../assets/images/nandos.png'
import caffeSaverios from '../assets/images/caffeSaverios.png'
import Avenida from '../assets/images/Avenida.png'
import sharedLoyality from '../assets/images/sharedLoyality.png'
import testin from '../assets/images/testin.png'
export default function BrandDropdown() {
  return (
    <div id='brandDropdown' className='container'>
      <div className='row'>
        <div className='box'>
            <div>
                <img className='dropdown-img' src={logo}></img>
            </div>
            <div className='heading'>
                Testing demo brand
            </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12 pr-0 pl-0'>
            <div className='brands'>
                <div>
                    <img src={plus}></img>
                </div>
                <div className='sub-heading'>Add New Brands</div>
            </div>
        </div>
      </div>

      <div className='allBrands col-md-12'>
        <div className='smallBrand'>
           <a className='brands'>
            <span className='caption'>
                YOUR BRANDS
            </span>
           </a>
        </div>
        <a className='otherBrand'>
            <div className='singleBrand'>
                <img className='image' src={mcDonalds} width={20} height={20}></img>
                <h3 className='image-heading'>McDonalds</h3>
            </div>
        </a>
        <a className='otherBrand'>
            <div className='singleBrand'>
                <img className='image' src={customerCheckout} width={20} height={20}></img>
                <h3 className='image-heading'>Customer Chcekout Brand</h3>
            </div>
        </a>
        <a className='otherBrand'>
            <div className='singleBrand'>
                <img className='image' src={cloudWaitress} width={20} height={20}></img>
                <h3 className='image-heading'>Cloudwaitress</h3>
            </div>
        </a>
        <a className='otherBrand'>
            <div className='singleBrand'>
                <img className='image' src={testBrand} width={20} height={20}></img>
                <h3 className='image-heading'>Test Brand</h3>
            </div>
        </a>
        <a className='otherBrand'>
            <div className='singleBrand'>
                <img className='image' src={LionFish} width={20} height={20}></img>
                <h3 className='image-heading'>Lion Fish</h3>
            </div>
        </a>
        <a className='otherBrand'>
            <div className='singleBrand'>
                <img className='image' src={nandos} width={20} height={20}></img>
                <h3 className='image-heading'>Nandos Australia</h3>
            </div>
        </a>
        <a className='otherBrand'>
            <div className='singleBrand'>
                <img className='image' src={caffeSaverios} width={20} height={20}></img>
                <h3 className='image-heading'>Caffe Saverios</h3>
            </div>
        </a>
        <a className='otherBrand'>
            <div className='singleBrand'>
                <img className='image' src={Avenida} width={20} height={20}></img>
                <h3 className='image-heading'>Avenida Brazil</h3>
            </div>
        </a>
        <a className='otherBrand'>
            <div className='singleBrand'>
                <img className='image' src={sharedLoyality} width={20} height={20}></img>
                <h3 className='image-heading'>Walletly Shared Loyality</h3>
            </div>
        </a>
        <a className='otherBrand'>
            <div className='singleBrand'>
                <img className='image' src={testin} width={20} height={20}></img>
                <h3 className='image-heading'>Testin</h3>
            </div>
        </a>
    </div> 
    </div>
  )
}
