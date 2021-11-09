import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';

const MyBooking = () => {

  const [bookings, setBookings] = useState([]);
  const email = sessionStorage.getItem('email');

  useEffect(() => {
    fetch(`https://pure-headland-36785.herokuapp.com/booking/${email}`)
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      setBookings(data);
    })
  }, [])



  const handleDelete = id => {
    const deleteConfermation = window.confirm('Are you sure to delete this booking');
    if(deleteConfermation){
      const url = `https://pure-headland-36785.herokuapp.com/booking/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then((data) => {
        console.log(data)
        if(data.deletedCount > 0){
          alert('Deleted Successfully');
          const remaining = bookings.filter(book => book._id !== id);
          setBookings(remaining);
        }
       
      })
    }
   
  }


    return (
        <div>
            <h2>My Booking</h2>
            <Table striped bordered hover variant="dark">
            <thead>
    <tr>
      <th>SL No.</th>
      <th>Title</th>
      <th>User Name</th>
      <th>User Email</th>
      <th>Address</th>
      <th>Phone Number</th>
      <th>Price</th>
      <th>Action</th>
    </tr>
  </thead>

  {bookings.map((book, index) => (
     <tbody>
     <tr>
       <td>{index}</td>
       <td>{book.title}</td>
       <td>{book.name}</td>
       <td>{book.email}</td>
       <td>{book.address}</td>
       <td>{book.phoneNumber}</td>
       <td>{book.price}</td>
       <button onClick={() => handleDelete(book._id)}>Delete</button>
     </tr>
   </tbody>
  )
   
  )}
  
</Table>
        </div>
    );
};

export default MyBooking;