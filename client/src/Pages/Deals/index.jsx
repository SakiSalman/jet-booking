import React from 'react'
import TopBannar from '../../components/TopBannar/TopBannar'
import DealsForm from '../../components/Forms/DealsForm'
import DealsCard from '../../components/Cards/DealsCard'

const Deals = () => {
  return (
    <>
      {/* Banner Start */}
      <TopBannar
        bgImage={'https://demo.curlythemes.com/private-jet/wp-content/uploads/sites/27/2018/03/header-random-1.jpg?id=231'}
        title={'Deals'}
        breadCumb={'Deals'}
      />
      {/* Banner End */}


      <div className="_container py-20">
        <div className='text-center lg:w-3/5 mx-auto'>
          <h1 className='text-4xl font-medium mt-5 lg:mt-0' >Deals</h1>
          <p className='text-lg:text-xl'>Choose from one of our One Way Deals below and the entire aircraft and all seats are yours. Fly to major destinations on various category size aircraft from the FlyBLACK Fleet. Check back often as our Deals are continuously updated.</p>
        </div>
        <div>
          <DealsForm />
        </div>
        <div className='grid grid-cols-1 w-full lg:w-4/6 mx-auto gap-3 max-h-[400px]  lg:max-h-[500px] overflow-y-auto px-4 overflow-x-auto'>
             <DealsCard/>
             <DealsCard/>
             <DealsCard/>
             <DealsCard/>
        </div>

      </div>


    </>
  )
}

export default Deals