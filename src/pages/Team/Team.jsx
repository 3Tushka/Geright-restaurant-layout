import React from 'react'
import { Navbar, Title } from '../../components'
import ChefCard from '../../components/ChefCard/ChefCard'
import { data } from '../../constants'
import { Footer, Intro, Laurels } from '../../container'

import './team.scss'

export default function Team() {
    return (
        <div className="team">
            <Navbar />
            <Title title={"Our Chefs"} previous={"Home"} next={"Our Team"} />

            <div className="team-container section__padding">
                {data.chefs.map((chefs) => <ChefCard chefs={chefs} key={chefs.chefName} />)}
            </div>
            <Intro />
            <Laurels />
            <Footer />
        </div>
    )
}