import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ingredient } from '../utils/types';

interface IngredientItemProps {
  ingredient: Ingredient;
}

export const IngredientItem: React.FC<IngredientItemProps> = ({ ingredient }) => {
  return (
    <View style={styles.container}>
      <View style={styles.dot} />
      <Text style={styles.name}>{ingredient.name}</Text>
      <Text style={styles.amount}>
        {ingredient.amount} {ingredient.unit}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF6347',
    marginRight: 10,
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  amount: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
}); 