import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
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
 * @param organization User's organization
 * @param agentId Agent ID of the user
 * @param location User's location
 * @returns Promise<void>
 */
export const signUpUser = async (
  name: string,
  email: string,
  password: string,
  organization: string,
  agentId: string,
  location: string
): Promise<void> => {
  try {
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
      organization,
      agentId,
      location,
      verified: false, // Default value for verified
      createdAt: new Date().toISOString(),
    });

    console.log("User signed up and data stored successfully.");
  } catch (error: any) {
    console.error("Error signing up user:", error.message);
    throw new Error(error.message);
  }
};
