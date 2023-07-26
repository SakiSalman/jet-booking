import React from 'react'
import JetBookingForm from '../../components/Forms/JetBookingForm'

const CharterForm = () => {
  return (
    <div className='py-20' >
        <div className="container">
            <div className="md:w-3/6  text-center mx-auto">
            <h3 className='text-3xl font-medium mb-3'>Charter</h3>
        <p>With access to over 3,000 private aircraft worldwide, fly anywhere, anytime within 3 hours of booking. Our real time, on demand private jet charter service allows you to fly smarter and further to countless destinations, all from the tap of a finger.</p>
            </div>
        </div>
        <JetBookingForm/>
    </div>
  )
}

export default CharterForm