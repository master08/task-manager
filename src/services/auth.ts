import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User as FirebaseUser,
  updateProfile,
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from './firebase';
import { User } from '../types/user';

// Registrar nuevo usuario
export const registerUser = async (
  email: string,
  password: string,
  displayName: string,
  role: 'admin' | 'user' = 'user'
): Promise<User> => {
  try {
    // Crear usuario en Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const firebaseUser = userCredential.user;

    // Actualizar perfil con displayName
    await updateProfile(firebaseUser, { displayName });

    // Crear documento de usuario en Firestore
    const userData: User = {
      id: firebaseUser.uid,
      email: firebaseUser.email!,
      displayName,
      role,
      createdAt: new Date(),
      updatedAt: new Date(),
      isActive: true,
    };

    await setDoc(doc(db, 'users', firebaseUser.uid), userData);

    return userData;
  } catch (error) {
    throw new Error(`Error registering user: ${error}`);
  }
};

// Iniciar sesión
export const loginUser = async (email: string, password: string): Promise<FirebaseUser> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw new Error(`Error logging in: ${error}`);
  }
};

// Cerrar sesión
export const logoutUser = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error) {
    throw new Error(`Error logging out: ${error}`);
  }
};

// Obtener datos del usuario desde Firestore
export const getUserData = async (userId: string): Promise<User | null> => {
  try {
    const userDoc = await getDoc(doc(db, 'users', userId));
    if (userDoc.exists()) {
      return userDoc.data() as User;
    }
    return null;
  } catch (error) {
    console.error('Error getting user data:', error);
    return null;
  }
};

// Verificar si el usuario es administrador
export const isAdminUser = async (userId: string): Promise<boolean> => {
  try {
    const userData = await getUserData(userId);
    return userData?.role === 'admin';
  } catch (error) {
    console.error('Error checking admin status:', error);
    return false;
  }
};