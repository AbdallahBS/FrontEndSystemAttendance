import React  from 'react';
import Nav from './nav';

import Demands from './gestion';


export default function Dashbord() {
 
  //logout handel function

  function userLogout(){
    console.log("logout")
    localStorage.removeItem('token');
    navigate('/')
  }
 
 
  return (
    <main className="container-fluid">
      <div className="row">        
        <Nav></Nav>
        <main role="main" className="ml-sm-auto col-12">
          <div className="parallax-window" data-parallax="scroll" style={{ backgroundImage: `url('img/bg5.jpg')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            
            <div className="tm-section-wrap">
            <div className="col-md-4 mb-4">
 
  
</div>

              <section id="intro" className="tm-section">
                
              <div className="tm-bg-black-transparent tm-intro container">
  <div className="row">
  <div className="col-md-8">
  <div className="tm-section-content">
    <h2 className="tm-section-title mb-4 text-uppercase tm-color-primary" style={{ color: '#7CB9E8' }}>Espace d'administration</h2>
    <p className="tm-color-gray" style={{ color: 'white' }}>
      <span className='fw-bold'>Nom: exemple1</span> 
    </p>
    <p style={{ color: 'white' }}><span className='fw-bold'>prénom : exemple 1</span>  </p>
    <p style={{ color: 'white' }}><span className='fw-bold'>séance : Projet d'integration</span> </p>

    <p className="tm-color-gray" style={{ color: 'white' }}>
      Vous pouvez utiliser ce tableau de bord pour contoler votre séance.
    </p>
    <button
      type="button"
      className="btn btn-primary mt-3"
      onClick={userLogout}
    >
      Quitter
    </button>
  </div>
</div>


    <div className="col-md-4">
      {/* Card for the number of clients */}
      <div className="card mb-4 bg-transparent border-0" style={{ color: 'white' }}>
    <div className="card-body">
      <h5 className="card-title">Nombre des etudiants</h5>
      <p className="card-text">34</p>
    </div>
  </div>

      {/* Card for the number of messages */}
      <div className="card mb-4 bg-transparent border-0" style={{ color: 'white' }}>
    <div className="card-body">
      <h5 className="card-title">etudiants présent </h5>
      <p className="card-text">12</p>
    </div>
  </div>

      {/* Card for the number of demands */}
      <div className="card mb-4 bg-transparent border-0" style={{ color: 'white' }}>
    <div className="card-body">
      <h5 className="card-title">étudiant absent</h5>
      <p className="card-text">22</p>
    </div>
  </div>
    </div>
  </div>
</div>
             
              </section>
            </div>            
          </div>
<div className="tm-section-wrap bg-white">
          
          
          </div>
                  
          <Demands></Demands>
          {/*  <Contact></Contact>*/ }
        </main>        
      </div>
    </main>
  );
  
  }  