import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { IngredientItem } from '../components/IngredientItem';
import { Recipe } from '../utils/types';

interface RecipeDetailScreenProps {
  recipe: Recipe;
  onBack: () => void;
}

export const RecipeDetailScreen: React.FC<RecipeDetailScreenProps> = ({ 
  recipe, 
  onBack 
}) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={{ uri: recipe.image }} style={styles.image} />
        
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        
        <View style={styles.content}>
          <Text style={styles.title}>{recipe.title}</Text>
          
          <View style={styles.metaContainer}>
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>Hazırlama Süresi</Text>
              <Text style={styles.metaValue}>{recipe.time} dk</Text>
            </View>
            
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>Zorluk</Text>
              <Text style={styles.metaValue}>{recipe.difficulty}</Text>
            </View>
            
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>Kategori</Text>
              <Text style={styles.metaValue}>{recipe.category}</Text>
            </View>
          </View>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Malzemeler</Text>
            {recipe.ingredients.map((ingredient) => (
              <IngredientItem 
                key={ingredient.id} 
                ingredient={ingredient} 
              />
            ))}
          </View>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Hazırlanışı</Text>
            {recipe.instructions.map((instruction, index) => (
              <View key={index} style={styles.instructionItem}>
                <View style={styles.instructionNumber}>
                  <Text style={styles.instructionNumberText}>{index + 1}</Text>
                </View>
                <Text style={styles.instructionText}>{instruction}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 250,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 15,
  },
  metaItem: {
    alignItems: 'center',
  },
  metaLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  metaValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6347',
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#FF6347',
    paddingBottom: 5,
  },
  instructionItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  instructionNumber: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: '#FF6347',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginTop: 2,
  },
  instructionNumberText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  instructionText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
}); 