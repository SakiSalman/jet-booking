import React from 'react'
import TopBannar from '../../components/TopBannar/TopBannar'

const Deals = () => {
  return (
    <div>
      {/* Banner Start */}
      <TopBannar
        bgImage={'https://demo.curlythemes.com/private-jet/wp-content/uploads/sites/27/2018/03/header-random-1.jpg?id=231'}
        title={'Deals'}
        breadCumb={'Deals'}
      />
      {/* Banner End */}


      <div className="_container py-10">
        <div className='text-center lg:w-3/5 mx-auto'>
          <h1 className='text-4xl font-medium' >Deals</h1>
          <p className='text-lg:text-xl'>Choose from one of our One Way Deals below and the entire aircraft and all seats are yours. Fly to major destinations on various category size aircraft from the FlyBLACK Fleet. Check back often as our Deals are continuously updated.</p>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>

      </div>

    </div>
  )
}

export default Deals