import React, { useState, useEffect } from 'react';
import andre from '../assets/andre.svg';
import bagas from '../assets/bagas.svg';
import indro from '../assets/indro.svg';
import luna from '../assets/luna.svg';
import bintang from '../assets/5bintang.svg';

const Reviews_details = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    name: '',
    title: '',
    content: '',
    rating: 5,
    img: null,
  });
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [showMore, setShowMore] = useState(false);

  // Load reviews from local storage on component mount
  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem('reviews')) || [
      {
        img: andre,
        title: 'Sukabumi, Indonesia',
        alt: 'icon_bintang',
        name: 'Andre',
        rating: 5,
        content: 'Lorem ipsum dolor sit amet...',
      },
      {
        img: bagas,
        title: 'Jakarta, Indonesia',
        alt: 'icon_ceklis',
        name: 'Bagas',
        rating: 4,
        content: 'Lorem ipsum dolor sit amet...',
      },
      {
        img: indro,
        title: 'Aceh, Indonesia',
        alt: 'icon_check_in',
        name: 'Indro',
        rating: 4,
        content: 'Lorem ipsum dolor sit amet...',
      },
      {
        img: luna,
        title: 'Bandung, Indonesia',
        alt: 'icon_pesan',
        name: 'Luna',
        rating: 5,
        content: 'Lorem ipsum dolor sit amet...',
      },
    ];
    setReviews(savedReviews);
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setNewReview((prev) => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewReview((prev) => ({ ...prev, img: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRatingChange = (rating) => {
    setNewReview((prev) => ({ ...prev, rating }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedReviews = editIndex !== null ? reviews.map((review, index) => 
      index === editIndex ? {
        ...review,
        img: newReview.img || review.img,
        title: newReview.title,
        name: newReview.name,
        rating: newReview.rating,
        content: newReview.content,
      } : review
    ) : [
      ...reviews,
      {
        img: newReview.img || andre, // Use default image if no image is uploaded
        title: newReview.title,
        alt: 'icon_user_review',
        name: newReview.name,
        rating: newReview.rating,
        content: newReview.content,
      },
    ];
    setReviews(updatedReviews);
    localStorage.setItem('reviews', JSON.stringify(updatedReviews));
    setNewReview({ name: '', title: '', content: '', rating: 5, img: null });
    setShowModal(false);
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    setNewReview(reviews[index]);
    setEditIndex(index);
    setShowModal(true);
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <main>
      <div className='px-[159px] py-2 grid grid-cols-2 grid-rows-2 gap-[94px] justify-center text-center mt-[68px] pb-[75px]'>
        {reviews.slice(0, showMore ? reviews.length : 4).map((item, index) => (
          <main key={index}>
            <section className='flex flex-row'>
              <div className='font-poppins text-ijo gap-3'>
                <img className='items-start size-[80px] rounded-full' src={item.img} alt={item.alt} />
              </div>
              <div className='flex flex-col justify-start items-start ml-[16px]'>
                <p className='text-[5px] md:text-[9px] lg:text-[24px]'>{item.name}</p>
                <p className='text-[7px] lg:text-[14px] py-[10px]'>{item.title}</p>
              </div>
            </section>
            <div className='justify-start text-start mt-[16px]'>
              <h1 className='flex flex-row'>
                {item.rating}.0
                <img className='ml-[8px]' src={bintang} alt="5bintang" />
              </h1>
              <p>{item.content}</p>
              <button onClick={() => handleEdit(index)} className='text-blue-500 underline'>Edit</button>
            </div>
          </main>
        ))}
      </div>
      {reviews.length > 4 && (
        <div className='text-center mt-4'>
          <button
            onClick={toggleShowMore}
            className='text-blue-500 underline'
          >
            {showMore ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
      <div className='ml-[159px] border px-5 py-6 w-[190px] justify-center text-center'>
        <button onClick={() => setShowModal(true)}>Add Review</button>
      </div>

      {showModal && (
        <div className='fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center'>
          <div className='bg-white p-6 rounded-lg w-[400px]'>
            <h2 className='text-lg font-bold mb-4'>{editIndex !== null ? 'Edit Your Review' : 'Add Your Review'}</h2>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Name</label>
                <input
                  type='text'
                  id='name'
                  value={newReview.name}
                  onChange={handleInputChange}
                  className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='title' className='block text-sm font-medium text-gray-700'>Location</label>
                <input
                  type='text'
                  id='title'
                  value={newReview.title}
                  onChange={handleInputChange}
                  className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='content' className='block text-sm font-medium text-gray-700'>Review</label>
                <textarea
                  id='content'
                  value={newReview.content}
                  onChange={handleInputChange}
                  rows='4'
                  className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='rating' className='block text-sm font-medium text-gray-700'>Rating</label>
                <div className='flex space-x-1'>
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <svg
                      key={rating}
                      onClick={() => handleRatingChange(rating)}
                      className={`w-6 h-6 cursor-pointer ${rating <= newReview.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                      fill='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M12 17.27L18.18 21l-1.45-6.36L22 9.24l-6.36-.54L12 2 8.36 8.7 2 9.24l5.27 5.41L5.82 21z' />
                    </svg>
                  ))}
                </div>
              </div>
              <div className='mb-4'>
                <label htmlFor='img' className='block text-sm font-medium text-gray-700'>Upload Photo</label>
                <input
                  type='file'
                  id='img'
                  accept='image/*'
                  onChange={handleFileChange}
                  className='mt-1 block w-full'
                />
              </div>
              <button
                type='submit'
                className='inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                {editIndex !== null ? 'Update' : 'Submit'}
              </button>
              <button
                type='button'
                onClick={() => setShowModal(false)}
                className='ml-2 inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-500 shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

export default Reviews_details;
