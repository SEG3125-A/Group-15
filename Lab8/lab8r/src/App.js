import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import ReviewCard from './components/ReviewCard';
import Review from './components/Review';
//import { reviews } from './reviews';



function App() {
 const [reviews, setReviews] = useState([
    ['John', 'Mad Max','2024-01-01','Very good movie'],
    ['Mary', 'Home Alone','2024-01-01','great movie'],
    ['Benson', 'Fast and Furious','2024-01-01','not so great'],
    ['Diana', 'Gran Turismo','2024-01-01','nice movie...']
  ]);

  const addReview = (names, media,date, review) => {
    setReviews([[names, media, date, review], ...reviews]);
  }
  return (
    <div >
      <Header/>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <div>
        <ReviewCard addReview={addReview}/>
        </div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginTop: 120}}>
        {reviews.map((review, index) => (
      <Review
        //key={index}
        name={review[0]}
        media={review[1]}
        date={review[2]}
        review={review[3]}
      />
    ))}
        </div>
      
      </div>
      
      
    </div>
  );
}

export default App;
