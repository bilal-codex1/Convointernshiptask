import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/RecipeList.css';

interface Recipe {
  id: number;
  name: string;
  image: string;
  prepTimeMinutes: number;
  rating: number;
  reviewCount: number;
  cuisine: string;
  mealType: string[];
}

interface RecipeListProps {
  searchTerm: string; // Receive search term as a prop
}

const RecipeList: React.FC<RecipeListProps> = ({ searchTerm }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/recipes')
      .then(response => {
        setRecipes(response.data.recipes);
      })
      .catch(error => {
        console.error('Error fetching recipes', error);
      });
  }, []);

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) // Filter recipes by search term
  );

  return (
    <div className="recipe-list">
      <div className="recipe-grid">
        {filteredRecipes.map(recipe => (
          <div key={recipe.id} className="recipe-item">
            <div className="recipe-image-wrapper">
              <img src={recipe.image} alt={recipe.name} />
              <div className="cuisine-type">{recipe.cuisine}</div>
            </div>
            <h3>
              <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
            </h3>
            <div className="review-box">Reviews: {recipe.reviewCount}</div>
            <div className="recipe-details">
              <p><i className="fa fa-clock-o"></i> {recipe.prepTimeMinutes} minutes</p>
              <p>Meal Type: {recipe.mealType.join(', ')}</p>
              <p>Rating: {'★'.repeat(Math.floor(recipe.rating))} ({recipe.rating})</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
