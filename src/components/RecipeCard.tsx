import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Recipe } from '../utils/types';

interface RecipeCardProps {
  recipe: Recipe;
  onPress: (recipe: Recipe) => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onPress }) => {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => onPress(recipe)}
    >
      <Image source={{ uri: recipe.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{recipe.title}</Text>
        <View style={styles.metaContainer}>
          <Text style={styles.metaText}>{recipe.time} dk</Text>
          <Text style={styles.metaText}>{recipe.difficulty}</Text>
        </View>
        <Text style={styles.category}>{recipe.category}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 180,
  },
  infoContainer: {
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  metaContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  metaText: {
    fontSize: 14,
    color: '#666',
    marginRight: 10,
  },
  category: {
    fontSize: 14,
    color: '#FF6347',
    fontWeight: '500',
  },
}); 