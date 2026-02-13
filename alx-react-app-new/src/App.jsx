import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter'; // Import the new Counter component

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      
      {/* Adding the Counter component */}
      <Counter />

      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves photography and traveling" 
      />
      <Footer />
    </div>
  );
}

export default App;
