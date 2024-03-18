import './App.css';
import Header from './components/Header';
import ReviewCard from './components/ReviewCard';

function App() {
  return (
    <div >
      <Header/>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <ReviewCard/>
      </div>
      
    </div>
  );
}

export default App;
