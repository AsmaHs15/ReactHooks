import React, { useState } from 'react';
import Modal from 'react-modal';
import './AddMovie.css';
import Rate from '../Rate';

Modal.setAppElement('#root');

const AddMovie = ({ addMovie }) => {
  
  const [modalIsOpen, setIsOpen] = useState(false);

  const [name, setName] = useState('');
  const [imgTop, setImgTop] = useState('');
  const [imgHero, setImgHero] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');


  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setName('');
    setRating('');
    setImgTop('');
    setImgHero('');
    setDate('');
    setDescription('');
  }


  const handleSubmit = (e) => {
    let newMovie =  {
      name: name,
      imgTop: imgTop,
      imgHero: imgHero,
      date: date,
      description: description,
      rating: rating,
    };
    
    addMovie(e, newMovie);
    setIsOpen(false);
    setName('');
    setRating('');
    setImgTop('');
    setImgHero('');
    setDate('');
    setDescription('');
  };

  return (
    <div className="Add-btn-container">
      <button className="Add-btn" onClick={openModal}>
        Add movie
      </button>
      <Modal
        className="add-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
   <a href="#" title="Close" class="modal-close" onClick={closeModal} >Close</a>

        <h3 className="addMovie-h1">Add movie</h3>
        <form>
          <label>Name</label>
          <input
            value={name}
            type="text"
            name="name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <label>Rate</label>
          <input
            value={rating}
            type="text"
            name="rating"
            required
            onChange={(e) => setRating(e.target.value)}
         />
         
         {/* <Rate rating={rating} starIndex={setRating} /> */}

          <label>Date</label>
          <input
            value={date}
            type="month"
            name="date"
            required
            onChange={(e) => setDate(e.target.value)}
          />
          <label>ImageTop</label>
          <input
            value={imgTop}
            type="url"
            name="imageTop"
            required
            onChange={(e) => setImgTop(e.target.value)}
          />


          <label>Image Hero</label>
          <input
            value={imgHero}
            type="url"
            name="image"
            required
            onChange={(e) => setImgHero(e.target.value)}
          />
          <label>Description</label>
          <textarea
            value={description}
            type="text"
            name="description"
            required
            onChange={(e) => setDescription(e.target.value)}
          />
        </form>
        <button className="Modal-btn" onClick={handleSubmit}>
          Submit
        </button>
     
      </Modal>
    </div>
  );
};

export default AddMovie;
