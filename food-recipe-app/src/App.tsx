import React, { useState, Suspense } from 'react';
import './styles/App.css';
import Header from './components/Header';
import SecondaryNav from './components/SecondaryNav';
import RecipeList from './components/RecipeList';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Using lazy loading for RecipeDetail
const RecipeDetail = React.lazy(() => import('./components/RecipeDetail'));

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState(''); // State to track the search term

  return (
    <Router>
      <Header setSearchTerm={setSearchTerm} /> {/* Pass function to update search term */}
      <SecondaryNav />
      <Routes>
        <Route path="/" element={<RecipeList searchTerm={searchTerm} />} /> {/* Pass search term */}
        
        <Route
          path="/recipes/:id"
          element={
            <Suspense fallback={<div>Loading Recipe Details...</div>}>
              <RecipeDetail />
            </Suspense>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
