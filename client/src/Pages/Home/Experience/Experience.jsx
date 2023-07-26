import React from 'react'
import ExperienceCard from '../../../components/Experience/ExperienceCard'
import TopBannar from '../../../components/TopBannar/TopBannar'

const Experience = () => {
  return (
    <div>
    {/* Banner Start */}
    <TopBannar
     bgImage={'/images/header-random-1.jpg'}
     title={'Experience'}
     breadCumb={'Experience'}
     />
    {/* Banner End */}

    {/* Tour Packagees Start*/}
    <section className='bg-[#f5f3f1] py-10 lg:py-20'>
    <div className="package">
          <div className="container mx-auto">
          <div
          className='text-3xl text-center font-semibold mb-10'
          >
            <h3>Eccperience Best Flight With Elite Flights</h3>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <ExperienceCard/>
              <ExperienceCard/>
              <ExperienceCard/>
              <ExperienceCard/>
            </div>
          </div>
        </div>
    </section>
    {/* Tour Packagees End */}













</div>
  )
}

export default Experience