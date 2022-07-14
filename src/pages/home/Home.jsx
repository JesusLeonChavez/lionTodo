import React from 'react'
import CardHome from '../../components/cardHome/CardHome'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'

import "./home.css"

export default function Home() {
  return (
    <div className="home">
      <div className="cardHome">
        <CardHome />
      </div>
      <FeaturedInfo />
    </div>
  );
}
