import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import ReviewCard from './components/ReviewCard';
import Review from './components/Review';
//import { reviews } from './reviews';



function App() {
 const [reviews, setReviews] = useState([
  // C'était un très bon film
  // Un film fantastique
  // Pas très bon
  // bon film...
    ['John', 'Mad Max','2024-01-01','Very good movie'],
    ['Mary', 'Home Alone','2024-01-01','great movie'],
    ['Benson', 'Fast and Furious','2024-01-01','not so great'],
    ['Diana', 'Gran Turismo','2024-01-01','nice movie...']
  ]);
  const [language, setLanguage] = useState(true);

  const addReview = (names, media,date, review) => {
    setReviews([[names, media, date, review], ...reviews]);

  }
  const helpText = ['On this site you can post reviews of your favorite media, there is also an option to translate', 'Sur ce site, vous pouvez afficher des revues de votre média préféré. Vous pouvez afficher ce site en deux langues.' ]
  return (
    <div >
      <div style={{ height: 60, width: '100%', backgroundColor: 'red', color: 'white', padding: 3, display: 'flex',justifyContent: 'space-between' }}>
        {/* Commentaire */}
        <h2 style={{marginLeft: 5}}>Review</h2>
        {'     '}
        <button style = {{marginLeft: 520, height: 40, width: 100, marginTop: 10, backgroundColor: 'white', borderRadius: 10}} onClick={() =>setLanguage(!language)}>
          Translate {language ? '(FR)' : '(EN)'}
          </button> 
          <div class="container">
            <aside class="more-info">
          <span class="tooltiptext">{language ? helpText[0]: helpText[1]}</span>
          </aside>
</div>
        <div>
        </div>
    </div>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <div>
        <ReviewCard addReview={addReview} language={language}/>
        </div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginTop: 120}}>
        {reviews.map((review, index) => (
      <Review
        //key={index}
        name={review[0]}
        media={review[1]}
        date={review[2]}
        review={review[3]}
        language={language}
      />
    ))}
        </div>
      
      </div>
      
      
    </div>
  );
}

export default App;
