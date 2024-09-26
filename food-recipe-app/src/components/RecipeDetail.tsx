import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/RecipeDetail.css';

interface RecipeDetail {
  id: number;
  name: string;
  image: string;
  instructions: string;
  ingredients: string[];
  mealType: string;
  rating: number;
}

const RecipeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<RecipeDetail | null>(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/recipes/${id}`)
      .then(response => {
        setRecipe(response.data);
      })
      .catch(error => {
        console.error('Error fetching recipe details', error);
      });
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="recipe-detail-container">
      <div className="recipe-info">
        <h2>{recipe.name}</h2>
        <p>{recipe.instructions}</p>
        <h3>Ingredients</h3>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="recipe-image">
        <img src={recipe.image} alt={recipe.name} />
      </div>
    </div>
  );
};

export default RecipeDetail;
