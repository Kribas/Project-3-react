import React from 'react'
import './Clients.css'
import Client1 from '../images/Client1.png'
import Client2 from '../images/Client2.png'
import Client3 from '../images/Client3.png'
import Client4 from '../images/Client4.png'
import Client5 from '../images/Client5.png'
import Client6 from '../images/Client6.png'


function Clients() {
  return (
    <div className='clients text-center'>
        <div className='container'>
            <div className='row'>
                <div className='col-xl-2 col-lg-2 col-md-6 col-sm-6 d-flex align-items-center justify-content-center'>
                    <div className='client'>
                        <img className='img-fluid' src={Client1} alt="Client Image"/>
                    </div>
                </div>
                <div className='col-xl-2 col-lg-2 col-md-6  col-sm-6 d-flex align-items-center justify-content-center'>
                <div className='client'>
                        <img className='img-fluid' src={Client2} alt="Client Image"/>
                    </div>
                </div>
                <div className='col-xl-2 col-lg-2 col-md-6  col-sm-6 d-flex align-items-center justify-content-center'>
                <div className='client'>
                        <img className='img-fluid' src={Client3} alt="Client Image"/>
                    </div>
                </div>
                <div className='col-xl-2 col-lg-2 col-md-6  col-sm-6 d-flex align-items-center justify-content-center'>
                <div className='client'>
                        <img className='img-fluid' src={Client4} alt="Client Image"/>
                    </div>
                </div>
                <div className='col-xl-2 col-lg-2 col-md-6 col-sm-6 d-flex align-items-center justify-content-center'>
                <div className='client'>
                        <img className='img-fluid' src={Client5} alt="Client Image"/>
                    </div>
                </div>
                <div className='col-xl-2 col-lg-2 col-md-6 col-sm-6 d-flex align-items-center justify-content-center'>
                <div className='client'>
                        <img className='img-fluid' src={Client6} alt="Client Image"/>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Clients