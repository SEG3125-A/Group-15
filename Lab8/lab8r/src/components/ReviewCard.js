import React from 'react';
import { reviews } from '../reviews';
import { useState } from 'react';

export default function ReviewCard({addReview}) {
  const [name, setName] = useState('');
  const [media, setMedia] = useState('');
  const [date, setDate] = useState('');
  const [review, setReview] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !media || !review) {
      alert('Please fill in all fields');
      return;
    }
    addReview(name, media, date, review);
    setName('');
    setMedia('');
    setDate('');
    setReview('');
  };
  return (
    <div style={{height: 'auto', width: 'auto', backgroundColor: 'lightgrey', borderRadius: 5, padding: 20, marginTop: 20, alignContent: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
      <form onSubmit={handleSubmit}>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          
        <div style={{margin: 10}}>
            Name: 
            <input style={{borderRadius: 5, height: 20, marginLeft: 15}} type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div style={{margin: 10}}>
            Media 
            <input style={{borderRadius: 5, height: 20, marginLeft: 15}} type="text" name="name" value={media} onChange={(e) => setMedia(e.target.value)}/> 
        </div>
        <div style={{margin: 10}}>
            Date 
            <input style={{borderRadius: 5, height: 20, marginLeft: 15}} type="text" name="name" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        
        </div>
        <h4>Review:</h4>
        <input style={{height: 60, width: '80%', marginLeft: 50, borderRadius: 10, marginBottom: 10}} type="text" name="review" value={review} onChange={(e) => setReview(e.target.value)}/>
        
        <button style={{height: 40, width: '80%', marginLeft: 60, backgroundColor: 'red', color: 'white', borderRadius: 10, fontSize: 15, fontWeight: 'bold'}} type='submit'>Submit</button>
        </form>
    </div>
  )
}
