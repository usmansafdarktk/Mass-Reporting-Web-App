import { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { app } from '../utils/firebaseConfig';
import RequestCard from '../components/RequestCard';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  organization: string;
  verified: boolean;
}

const Requests = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const db = getFirestore(app);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersCollection = collection(db, 'users');
        const querySnapshot = await getDocs(usersCollection);
        const allUsers: User[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as User[];

        // Filter users with `verified: false`
        const unverifiedUsers = allUsers.filter((user) => !user.verified);
        setUsers(unverifiedUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [db]);

  const handleAccept = async (userId: string) => {
    try {
      const userDoc = doc(db, 'users', userId);
      await updateDoc(userDoc, { verified: true });
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
      alert('User accepted successfully!');
    } catch (error) {
      console.error('Error accepting user:', error);
    }
  };

  const handleReject = async (userId: string) => {
    try {
      const userDoc = doc(db, 'users', userId);
      await updateDoc(userDoc, { verified: false }); // Optional: Modify as needed
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
      alert('User rejected successfully!');
    } catch (error) {
      console.error('Error rejecting user:', error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-12 text-black">Pending Requests</h1>
      {loading ? (
        <p>Loading...</p>
      ) : users.length === 0 ? (
        <p>No pending requests.</p>
      ) : (
        <div className="space-y-4">
          {users.map((user) => (
            <RequestCard
              key={user.id}
              name={user.name}
              email={user.email}
              role={user.role}
              organization={user.organization}
              onAccept={() => handleAccept(user.id)}
              onReject={() => handleReject(user.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Requests;
