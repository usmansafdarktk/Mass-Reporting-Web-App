import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import InspectorProfileCard from '../components/InspectorProfileCard';

const Agents = () => {
  const inspectors = [
    {
      imagePath: '/images/inspector1.jpg',
      name: 'Inspector Jamil',
      rank: 'Senior Inspector',
      department: 'Traffic Police',
      contactInfo: 'Phone: +123-456-7890 | Email: jamil@police.com',
      bio: 'Jamil has over 10 years of experience in handling traffic complaints and enforcing road safety laws.',
      totalComplaints: 150,
      complaintsStatus: {
        open: 20,
        inProgress: 30,
        resolved: 100,
      },
    },
    {
      imagePath: '/images/inspector2.jpg',
      name: 'Inspector Nasir',
      rank: 'Inspector',
      department: 'Criminal Investigation',
      contactInfo: 'Phone: +987-654-3210 | Email: nasir@police.com',
      bio: 'Nasir specializes in criminal investigations and has solved numerous high-profile cases over the years.',
      totalComplaints: 80,
      complaintsStatus: {
        open: 10,
        inProgress: 20,
        resolved: 50,
      },
    },
    {
      imagePath: '/images/inspector3.jpg',
      name: 'Inspector Sarib',
      rank: 'Assistant Inspector',
      department: 'Cyber Crime Unit',
      contactInfo: 'Phone: +456-789-1234 | Email: sarib@police.com',
      bio: 'Sarib leads the fight against cybercrime, ensuring digital safety for all.',
      totalComplaints: 60,
      complaintsStatus: {
        open: 5,
        inProgress: 10,
        resolved: 45,
      },
    },
  ];

  return (
    <>
      <Breadcrumb pageName="Agents" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {inspectors.map((inspector, index) => (
          <InspectorProfileCard key={index} {...inspector} />
        ))}
      </div>
    </>
  );
};

export default Agents;
