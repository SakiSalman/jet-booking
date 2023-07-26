import React from 'react'
import TopBannar from '../../components/TopBannar/TopBannar'
import CharterForm from './CharterForm'

const Charter = () => {
  return (
    <>

      <TopBannar
        bgImage={'/images/header-random-2.jpg'}
        title={'Charter'}
        breadCumb={'Charter'}
      />

      <CharterForm/>
    </>
  )
}

export default Charter