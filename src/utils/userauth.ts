import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { app } from "./firebaseConfig"; // Ensure firebaseConfig is correctly exported

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

/**
 * Signs up a new user with Firebase Authentication and stores additional user data in Firestore.
 * @param name Full name of the user
 * @param email Email address of the user
 * @param password Password for the account
 * @param confirmPassword Confirmation of the password
 * @param phoneNumber User's phone number
 * @param role User's role
 * @param organization User's organization
 * @returns Promise<void>
 */
export const signUpUser = async (
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
  phoneNumber: string,
  role: string,
  organization: string
): Promise<void> => {
  try {
    // Check if passwords match
    if (password !== confirmPassword) {
      throw new Error("Passwords do not match.");
    }

    // Create a new user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    // Update user profile with the name
    await updateProfile(userCredential.user, {
      displayName: name,
    });

    // Add user data to Firestore
    const userDoc = doc(db, "users", userCredential.user.uid);
    await setDoc(userDoc, {
      name,
      email,
      phoneNumber,
      role,
      organization,
      verified: false, // Default value for verified
      createdAt: new Date().toISOString(),
    });

    console.log("User signed up and data stored successfully.");
  } catch (error: any) {
    console.error("Error signing up user:", error.message);
    throw new Error(error.message);
  }
};


/**
 * Logs in a user using Firebase Authentication.
 * @param email User's email
 * @param password User's password
 * @returns Promise<void>
 */
export const signInUser = async (email: string, password: string): Promise<void> => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in successfully.");
  } catch (error: any) {
    console.error("Error logging in user:", error.message);
    throw new Error(error.message);
  }
};