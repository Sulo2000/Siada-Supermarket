import React from 'react'
import Homeswiper from './Homeswiper'
import Main from './Main';
import Section from './Section';
import Container from './Container';
import Bajin from './Bajin';

export default function Home() {
  return (
    <div className='home__container'>
        <Homeswiper />
        <Main />
        <Section />
        <Bajin />
        <Container />
    </div>
  )
}