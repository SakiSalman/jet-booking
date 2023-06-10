import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const Skeletons = ({width=50, height=10, type=false}) => {
  return (
    <div>
         <Skeleton
             width={width}
             height={height}
             circle={type}
            />
      
    </div>
  )
}

export default Skeletons