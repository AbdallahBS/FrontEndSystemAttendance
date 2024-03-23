import React from 'react';
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBIcon, MDBInput } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';



export default function Username() {
  return (
    <MDBContainer className="my-5">
      
      <MDBCard>
        <MDBRow className="g-5">
          <MDBCol md="6">
            <MDBCardImage src="img/bg3.jpg" alt="login form" className="rounded-start w-100" />
          </MDBCol>
          <MDBCol md="6">
            <MDBCardBody className="d-flex flex-column">
              <div className="d-flex flex-row mt-2">
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                <span className="h1 fw-bold mb-0">ISETKL</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>
                Espace d'administration/etudiant
              </h5>

              <form >
                <MDBInput wrapperClass="mb-4" label="Nom d'utilisateur"  id="formControlLg" type="text" size="lg" />
                <MDBBtn className="mb-4 px-5" color="dark" type="submit" size="lg">
                  Se connecter
                </MDBBtn>
              </form>

              <div className="d-flex flex-row justify-content-start">
                <Link to="/register" className="small text-muted me-1">
                  Créer un compte.
                </Link>
                <a href="#!" className="small text-muted">
                  Conditions d'utilisation.
                </a>
                <a href="#!" className="small text-muted">
                  Politique de confidentialité
                </a>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}
