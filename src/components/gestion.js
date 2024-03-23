import React, { useState, useEffect } from 'react';
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody, MDBBadge } from 'mdb-react-ui-kit';

export default function Gestion() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/getAllStudents')
      .then(response => response.json())
      .then(data => {
        // Convert the object into an array of objects
        const studentArray = Object.keys(data).map(studentId => ({
          id: studentId,
          ...data[studentId]
        }));
        setStudents(studentArray);
      })
      .catch(error => {
        console.error('Error fetching student data:', error);
      });
  }, []);

  return (
    <div className="tm-section-wrap bg-white">
      <div className="col-12 tm-section-pad d-flex justify-content-center align-items-center">
        <div className="text-center">
          <br></br>
          <h2 className="tm-text-primary mb-4">Gestion des étudiants</h2>
        </div>
      </div>
      <section id="gestion" className="row tm-section">
        <div className="col-12 tm-section-pad">
          <div className="tm-flex-item-left">
            <MDBTable align='middle'>
              <MDBTableHead>
                <tr>
                  <th scope='col'>Nom étudiant</th>
                  <th scope='col'>ID</th>
                  <th scope='col'>Date de présence</th>
                  <th scope='col'>État</th>
                  <th scope='col'>Actions</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {students.map(student => (
                  <tr key={student.id}>
                    <td>{student.nom}</td>
                    <td>{student.id}</td>
                    <td>{student.date_presence || 'en cours...'}</td>
                    <td>
                      <MDBBadge pill color={student.etat === 'present' ? 'success' : 'danger'}>
                        {student.etat}
                      </MDBBadge>
                    </td>
                    <td>
                      <>
                        <MDBBtn color='primary' size='sm'>
                          Modifier
                        </MDBBtn>
                        <MDBBtn color='primary' size='sm'>
                          présent
                        </MDBBtn>
                        <MDBBtn color='danger' size='sm' outline>
                          absent
                        </MDBBtn>
                      </>
                    </td>
                  </tr>
                ))}
              </MDBTableBody>
            </MDBTable>
          </div>
        </div>
      </section>
    </div>
  );
}
