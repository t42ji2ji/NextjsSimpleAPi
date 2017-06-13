import React, { Component } from 'react'
import Header from '../components/Head'
import Control from '../components/Control'


const Index = () => (
  <div className="container" style={stylesheets.container}>
    <Header />
    <Control />
  </div>
)

const stylesheets = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginTop:340
  }
}

export default Index