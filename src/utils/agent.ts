import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "./firebaseConfig"; // Import the initialized app

// Initialize Firebase services
const db = getFirestore(app);
const storage = getStorage(app);

/**
 * Adds an agent to Firestore and uploads their profile picture to Firebase Storage.
 * @param agentData Object containing agent details.
 * @returns Promise<{ success: boolean; message: string }>
 */
export const addAgent = async (agentData: {
  name: string;
  email: string;
  phone: string;
  address: string;
  agentId: string;
  profilePicture: File | null;
}): Promise<{ success: boolean; message: string }> => {
  try {
    let profilePictureUrl = null;

    // Upload profile picture if provided
    if (agentData.profilePicture) {
      const storageRef = ref(storage, `agents/${agentData.agentId}/profilePicture`);
      const snapshot = await uploadBytes(storageRef, agentData.profilePicture);
      profilePictureUrl = await getDownloadURL(snapshot.ref);
    }

    // Save agent data to Firestore
    const agentRef = doc(db, "agents", agentData.agentId);
    await setDoc(agentRef, {
      name: agentData.name,
      email: agentData.email,
      phone: agentData.phone,
      address: agentData.address,
      agentId: agentData.agentId,
      profilePicture: profilePictureUrl,
      createdAt: new Date().toISOString(),
    });

    return { success: true, message: "Agent added successfully!" };
  } catch (error: any) {
    console.error("Error adding agent:", error.message);
    return { success: false, message: error.message };
  }
};
