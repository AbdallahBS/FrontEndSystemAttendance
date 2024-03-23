import React, { useState, useEffect } from "react";
import { MDBInput, MDBFile } from "mdb-react-ui-kit";
import { Modal, Button } from "react-bootstrap";

export default function Blog() {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [modifyBlogData, setModifyBlogData] = useState(null); // State to hold data for modification
  const [newBlogData, setNewBlogData] = useState({
    title: "",
    content: "",
    image: null,
  });
  const [showAddModal, setShowAddModal] = useState(false);
  const [updateTrigger, setUpdateTrigger] = useState(false);// This key triggers a re-render



  const handleModifyClick = (blog) => {
    // Set the selected blog for modification
    setSelectedBlog(blog);

    // Set data for modification
    setModifyBlogData({
      id: blog.id,
      name: blog.name,
      content: blog.content,
      image:blog.image
      // Add other properties as needed
    });
    console.log(modifyBlogData)

    // Show the modal
    handleShow();
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
  
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Data = reader.result.split(',')[1]; // Extract base64 data
        setModifyBlogData((prevData) => ({
          ...prevData,
          image: base64Data,
          file, // Keep the file if needed for further processing
        }));
        console.log("this",base64Data)
      };
  
      reader.readAsDataURL(file);
    }

  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setModifyBlogData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  const handleDeleteClick = (blog) => {
   
    if (blog) {
      // Log the ID of the selected blog
      console.log("Selected Blog ID:", blog.id);

      // Make API call to deleteBlog
      fetch(`https://jovial-taffy-bc3db5.netlify.app/.netlify/functions/api/delBlog`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: blog.id, // Include the id in the request body
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setUpdateTrigger((prev) => !prev);
          // Handle success, e.g., update state, close modal
          alert("Blog deleted successfully:", data);
          handleClose();
        })
        .catch((error) => {
          // Handle error
          alert("Error deleting blog:", error);
        });
    }
  };
  
  const handleAjoutClick = () => {
    // Reset new blog data
    setNewBlogData({
      name: "",
      content: "",
      image: null,
    });
    setShowAddModal(true);
  };
  const handleAddBlog = () => {
    // Check if newBlogData is not null or undefined
    if (newBlogData && typeof newBlogData === 'object') {
      // Check if title, content, and image are not null or undefined
      if (
        newBlogData.title !== undefined &&
        newBlogData.content !== undefined &&
        newBlogData.image !== undefined &&
        newBlogData.title.trim() !== "" &&
        newBlogData.content.trim() !== ""
      ) {
        console.log(newBlogData);
        // Make API call to addBlog
        fetch("https://jovial-taffy-bc3db5.netlify.app/.netlify/functions/api/addBlog", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newBlogData),
        })
          .then((response) => response.json())
          .then((data) => {
            setUpdateTrigger((prev) => !prev);
            alert("blog ajouté avec succès");
            handleClose();
          })
          .catch((error) => {
            alert("Erreur ", error);
          });
      } else {
        // Handle the case where any input is empty or undefined
        alert("Veuillez remplir tous les champs.");
      }
    } else {
      // Handle the case where newBlogData is null or undefined
      alert("newBlogData is null or undefined.");
    }
  };
  
  
  const [show, setShow] = useState(false);
  const handleClose = () => {setShow(false),setShowAddModal(false)};
  const handleShow = () => setShow(true);

  return (
    
    <section id="about" className="row tm-section">
      <div className="col-12 tm-section-pad d-flex justify-content-center align-items-center">
        <div className="text-center">
          <h2 className="tm-text-primary mb-4">Gestion des Articles</h2>
          {/* Votre autre contenu va ici */}
        </div>
      </div>
       <button
                    type="button"
                    className="btn btn-primary mr-2"
                    data-mdb-ripple-init
                    onClick={() => handleAjoutClick()}
                  >
                    Ajouter Un Article
                  </button>
      <div className="row row-cols-1 row-cols-md-3 g-4">
       
         
            <div  className="col">
              <div className="card">
                <img
                  src={`data:image/png;base64, `}
                  className="card-img-top"
                  
                />
                <div className="card-body">
                  <h5 className="card-title"></h5>
                  <p className="card-text"></p>
                  <button
                    type="button"
                    className="btn btn-primary mr-2"
                    data-mdb-ripple-init
                    onClick={() => handleModifyClick()}
                  >
                    Modifier
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-mdb-ripple-init
                    onClick={() => handleDeleteClick()}
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modify Blog - {selectedBlog?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modifyBlogData && (
            <div>
              <MDBInput
                                label="Name"
                                id="name"
                                type="text"
                                size="lg"
                                name="name"
                                value={modifyBlogData.name}
                                onChange={handleInputChange}
              />
              <br />
              <MDBInput
                label="Content"
                id="content"
                type="text"
                name="content"
                value={modifyBlogData.content}
                onChange={handleInputChange}
              />
              <br />
              <MDBFile label="Default file input example" id="customFile" onChange={handleFileChange} />
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
       {/* Add modal for adding a new blog */}
       <Modal show={showAddModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter Un Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <MDBInput
              label="Titre"
              id="title"
              type="text"
              size="lg"
              name="title"
              value={newBlogData.title}
              onChange={(e) =>
                setNewBlogData({ ...newBlogData, title: e.target.value })
              }
            />
            
            <br />
            <MDBInput
              label="Content"
              id="content"
              type="text"
              name="content"
              value={newBlogData.content}
              onChange={(e) =>
                setNewBlogData({ ...newBlogData, content: e.target.value })
              }
              required
            />
            <br />
            <MDBFile
              label="Default file input example"
              id="customFile"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    const base64Data = reader.result.split(',')[1];
                    setNewBlogData({ ...newBlogData, image: base64Data });
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddBlog}>
            Ajouter
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}
