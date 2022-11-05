import React from 'react'
import { HeroList } from '../hero/HeroList'

export const DcScreen = () => {
    return (
        <div>
            <h1 className='text-2xl font-bold my-4'>DC Heroes</h1>

            <HeroList publisher={'DC Comics'}/>
        </div>
    )
}
