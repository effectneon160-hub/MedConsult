export const MOCK_PATIENT = {
  id: 'p_12345',
  name: 'John Carter',
  email: 'john.carter@example.com',
  sex: 'Male',
  age: 42,
  condition: 'Erectile Dysfunction',
  duration: '6-12 months',
  previousTreatment: true,
  medicationName: 'Sildenafil 50mg',
  treatmentDuration: '3 months',
  symptoms: 'Occasional difficulty maintaining erection during intercourse.',
  status: 'Under Review',
  submittedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString() // 2 hours ago
};

export const MOCK_DOCTOR = {
  id: 'd_98765',
  name: 'Dr. Emily Watson',
  specialty: "Men's Health",
  activeReviews: 12,
  stats: {
    pending: 6,
    approved: 14,
    rejected: 2
  }
};

export const PENDING_REQUESTS = [
MOCK_PATIENT,
{
  id: 'p_12346',
  name: 'Sarah Miller',
  email: 'sarah.m@example.com',
  sex: 'Female',
  age: 28,
  condition: 'Hair Loss',
  duration: '1-6 months',
  previousTreatment: false,
  medicationName: '',
  treatmentDuration: '',
  symptoms: 'Noticeable thinning at the crown.',
  status: 'Under Review',
  submittedAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString()
},
{
  id: 'p_12347',
  name: 'Michael Chen',
  email: 'm.chen@example.com',
  sex: 'Male',
  age: 35,
  condition: 'Weight Management',
  duration: '1+ year',
  previousTreatment: true,
  medicationName: 'Phentermine',
  treatmentDuration: '6 months',
  symptoms: 'Struggling to lose weight despite diet and exercise.',
  status: 'Under Review',
  submittedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
}];