import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBInputGroup,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <MDBContainer className="my-5">
    
      <MDBCard>
        <MDBRow className="g-5">
        <MDBCol md="6">
            <MDBCardImage src="img/bg3.jpg" alt="login form" className="rounded-start w-100 h-100" />
          </MDBCol>

          <MDBCol md="6">
            <MDBCardBody className="d-flex flex-column">
              <div className="d-flex flex-row mt-2">
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                <span className="h1 fw-bold mb-0">ISETKL</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>
                Inscription
              </h5>
              <form >
  <MDBInputGroup className="mb-4">
    <MDBInput label="Prénom" id="formControlLg" type="text" size="lg" className="mb-3" />
    <MDBInput label="Nom"  id="formControlLg" type="text" size="lg" className="mb-3" />
  </MDBInputGroup>
  <MDBInput label="Nom d'utilisateur"  id="formControlLg" type="text" size="lg" className="mb-3" />
  <MDBInput label="Mot de passe"  id="formControlLg" type="password" size="lg" className="mb-3" />
  <MDBInput label="" placeholder='photo de profil'  id="formControlLg" type="file" size="lg" className="mb-3" />
  <MDBBtn className="mb-4 px-5" color="dark" type="submit" size="lg">
    S'inscrire
  </MDBBtn>
</form>

              <p>
                <a className="small text-muted" href="#!">
                  Vous avez déjà un compte ?
                </a>
                <Link to="/" style={{ color: '#393f81' }}>
                  {' '}
                  Connectez-vous maintenant
                </Link>
              </p>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}
