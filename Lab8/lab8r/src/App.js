import './App.css';
import Header from './components/Header';
import ReviewCard from './components/ReviewCard';
import Review from './components/Review';

function App() {
  return (
    <div >
      <Header/>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <div>
        <ReviewCard/>
        </div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginTop: 120}}>
          <Review/>
          <Review/>
          <Review/>
          <Review/>
        </div>
      
      </div>
      
      
    </div>
  );
}

export default App;
