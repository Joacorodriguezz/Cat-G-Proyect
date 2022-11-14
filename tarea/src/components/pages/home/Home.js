import React from 'react'
import { Card } from 'react-bootstrap'
import BasicExample from '../../Cards/Cards'

import Carrousel from './Carrousel'
import './Home.css'
 
function Home() {
  return (
    <div class="home">
      <h1>BEST SELLERS </h1>
      <Carrousel/>

      <div id="cards">
          <BasicExample class="card1"/>
          <BasicExample/>
          <BasicExample/>
          <BasicExample/>
          <BasicExample/>
      </div>

    </div>
  )
}

export default Home