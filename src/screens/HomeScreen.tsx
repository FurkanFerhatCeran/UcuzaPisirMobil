import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { RecipeCard } from '../components/RecipeCard';
import { RECIPES } from '../data/recipes';
import { Recipe } from '../utils/types';

export const HomeScreen: React.FC<{
  onRecipeSelect: (recipe: Recipe) => void;
  onAccountPress: () => void;
}> = ({ onRecipeSelect, onAccountPress }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(RECIPES);
  
  // Extract unique categories from recipes
  const categories = [...new Set(RECIPES.map(recipe => recipe.category))];

  useEffect(() => {
    let result = RECIPES;
    
    // Apply search filter
    if (searchQuery) {
      result = result.filter(recipe => 
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply category filter
    if (selectedCategory) {
      result = result.filter(recipe => recipe.category === selectedCategory);
    }
    
    setFilteredRecipes(result);
  }, [searchQuery, selectedCategory]);

  const handleCategoryPress = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Ucuza Pişir</Text>
        <Text style={styles.subtitle}>Ekonomik ve Lezzetli Tarifler</Text>
      </View>
      
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Tarif veya kategori ara..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      
      {/* Category Menu */}
      <View style={styles.categoryContainer}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryScroll}
        >
          <TouchableOpacity 
            style={[
              styles.categoryItem, 
              selectedCategory === null && styles.categoryItemSelected
            ]}
            onPress={() => setSelectedCategory(null)}
          >
            <Text style={[
              styles.categoryText,
              selectedCategory === null && styles.categoryTextSelected
            ]}>
              Tümü
            </Text>
          </TouchableOpacity>
          
          {categories.map((category) => (
            <TouchableOpacity 
              key={category}
              style={[
                styles.categoryItem, 
                selectedCategory === category && styles.categoryItemSelected
              ]}
              onPress={() => handleCategoryPress(category)}
            >
              <Text style={[
                styles.categoryText,
                selectedCategory === category && styles.categoryTextSelected
              ]}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      
      <View style={styles.contentContainer}>
        <FlatList
          data={filteredRecipes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <RecipeCard 
              recipe={item} 
              onPress={onRecipeSelect} 
            />
          )}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      </View>
      
      {/* User Account Footer */}
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.accountButton}
          onPress={onAccountPress}
        >
          <View style={styles.accountIconContainer}>
            <Text style={styles.accountIcon}>👤</Text>
          </View>
          <Text style={styles.accountText}>Hesabım</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Anasayfa</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Favoriler</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    padding: 20,
    paddingTop: 10,
    backgroundColor: '#FF6347',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.8,
  },
  searchContainer: {
    padding: 15,
    paddingBottom: 5,
  },
  searchInput: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    fontSize: 16,
  },
  categoryContainer: {
    paddingVertical: 10,
  },
  categoryScroll: {
    paddingHorizontal: 15,
  },
  categoryItem: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  categoryItemSelected: {
    backgroundColor: '#FF6347',
    borderColor: '#FF6347',
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#555',
  },
  categoryTextSelected: {
    color: '#fff',
  },
  contentContainer: {
    flex: 1,
  },
  list: {
    padding: 15,
    paddingBottom: 20,
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  accountButton: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  accountIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FF6347',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  accountIcon: {
    fontSize: 20,
    color: '#fff',
  },
  accountText: {
    fontSize: 12,
    color: '#333',
  },
  footerButton: {
    padding: 10,
    alignItems: 'center',
  },
  footerButtonText: {
    fontSize: 14,
    color: '#555',
  },
}); 