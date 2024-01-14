import React from 'react'
import { Helmet } from 'react-helmet-async'
import Excellent from '../../components/Excellent'
import Mission from '../../components/OutMissions'
import Products from '../../components/Products'
import Pricing from '../../components/Pricing'
import OurTeam from '../../components/OurTeam'

const Home = () => {
  return (
    <div>
        <Helmet><title>Home</title></Helmet>
        <div>
            <Excellent />
            <main>
                <Mission />
                <Products />
                <Pricing />
                <OurTeam />
            </main>
        </div>
    </div>
  )
}

export default Home