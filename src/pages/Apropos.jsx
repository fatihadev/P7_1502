import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Bannerabout from '../components/Bannerabout';
import Collapses from '../components/Collapses.jsx';
import CollapseList from '../collapse/Collapse.json'
import '../style/apropos.css';




function Apropos() {
  return (
    <>
        <Header/>
          <Bannerabout />
            <Collapses CollapseList={CollapseList} />
        <Footer />
    </>
  )
}

export default Apropos;