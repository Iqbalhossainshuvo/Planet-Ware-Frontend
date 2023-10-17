import SingleEvents from '@/components/SingleEvents/SingleEvents'
import React from 'react'

export const metadata = {
    title: 'PLANET WARE | Single event',
    description: 'A PLANET WARE website',
  }

const SingleEventsPage = ({params}) => {
    return (
        <div>
            <SingleEvents params={params.id}/>
        </div>
    )
}

export default SingleEventsPage