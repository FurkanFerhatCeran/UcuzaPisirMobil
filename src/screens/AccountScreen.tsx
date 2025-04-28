import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Alert } from 'react-native';

interface User {
  username: string;
  password: string;
}

// Demo kullanıcı bilgileri
const DEMO_USERS: User[] = [
  { username: 'demo', password: '123456' }
];

export const AccountScreen: React.FC<{
  onBackPress: () => void;
}> = ({ onBackPress }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = () => {
    // Demo kullanıcı kontrolü
    const foundUser = DEMO_USERS.find(
      u => u.username === username && u.password === password
    );

    if (foundUser) {
      setUser(foundUser);
      setIsLoggedIn(true);
      setUsername('');
      setPassword('');
    } else {
      Alert.alert('Hata', 'Kullanıcı adı veya şifre hatalı');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  const handleRegister = () => {
    Alert.alert('Bilgi', 'Kayıt fonksiyonu henüz aktif değil');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Hesabım</Text>
        <View style={{ width: 40 }} />
      </View>

      {isLoggedIn ? (
        <View style={styles.loggedInContainer}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>👤</Text>
          </View>
          <Text style={styles.welcomeText}>Hoşgeldin, {user?.username}</Text>
          
          <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuItemText}>Favori Tariflerim</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuItemText}>Kaydedilen Tarifler</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuItemText}>Ayarlar</Text>
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity 
            style={styles.logoutButton}
            onPress={handleLogout}
          >
            <Text style={styles.logoutButtonText}>Çıkış Yap</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.loginContainer}>
          <Text style={styles.loginTitle}>Giriş Yap</Text>
          <Text style={styles.loginSubtitle}>Tariflerinize erişmek için giriş yapın</Text>
          
          <TextInput 
            style={styles.input}
            placeholder="Kullanıcı Adı"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />
          
          <TextInput 
            style={styles.input}
            placeholder="Şifre"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          
          <TouchableOpacity 
            style={styles.loginButton}
            onPress={handleLogin}
          >
            <Text style={styles.loginButtonText}>Giriş Yap</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.registerButton}
            onPress={handleRegister}
          >
            <Text style={styles.registerButtonText}>Hesap Oluştur</Text>
          </TouchableOpacity>
          
          <Text style={styles.demoText}>
            Demo: kullanıcı adı "demo", şifre "123456"
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#FF6347',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  loginContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  loginSubtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#FF6347',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerButton: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FF6347',
    padding: 15,
    alignItems: 'center',
    marginTop: 15,
  },
  registerButtonText: {
    color: '#FF6347',
    fontSize: 16,
    fontWeight: 'bold',
  },
  demoText: {
    marginTop: 30,
    color: '#888',
    fontSize: 14,
  },
  loggedInContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FF6347',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  avatarText: {
    fontSize: 40,
    color: '#fff',
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  menuContainer: {
    width: '100%',
    marginBottom: 30,
  },
  menuItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  menuItemText: {
    fontSize: 16,
    color: '#333',
  },
  logoutButton: {
    width: '100%',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 'auto',
  },
  logoutButtonText: {
    color: '#FF6347',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 