export const mockSessions = [
  { id: 'TS-240601', date: '01 Jun 2024 (SAT)', venue: 'London Center', room: 'Room 101', registered: 28, status: 'Upcoming', reportingTime: '07:30 AM', testTime: '09:00 AM - 12:20 PM' },
  { id: 'TS-240608', date: '08 Jun 2024 (SAT)', venue: 'London Center', room: 'Room 102', registered: 26, status: 'Upcoming', reportingTime: '07:30 AM', testTime: '09:00 AM - 12:20 PM' },
  { id: 'TS-240615', date: '15 Jun 2024 (SAT)', venue: 'Manchester Center', room: 'Room 201', registered: 30, status: 'Ongoing', reportingTime: '07:30 AM', testTime: '09:00 AM - 12:20 PM' },
  { id: 'TS-240622', date: '22 Jun 2024 (SAT)', venue: 'Birmingham Center', room: 'Room 301 (Computer Delivered)', registered: 24, status: 'Upcoming', reportingTime: '07:30 AM', testTime: '09:00 AM - 12:20 PM', address: '1 Colmore Row, Birmingham B3 2BJ, UK', capacity: 30 },
  { id: 'TS-240629', date: '29 Jun 2024 (SAT)', venue: 'Birmingham Center', room: 'Room 302', registered: 25, status: 'Completed', reportingTime: '07:30 AM', testTime: '09:00 AM - 12:20 PM' },
];

export const mockCandidates = [
  { id: 'P1234567', name: 'Aarav Sharma', idType: 'Passport', session: 'TS-240622', status: 'Pending', module: 'Academic', date: '22 Jun 2024', scores: { L: '8.0', R: '7.5', W: '6.5', S: '7.5', overall: '7.5' }, dispatchStatus: 'Pending', photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop', idDoc: 'https://images.unsplash.com/photo-1633519803362-e6e222955f05?w=400&h=300&fit=crop' },
  { id: 'P2345678', name: 'Fatima Khan', idType: 'Passport', session: 'TS-240622', status: 'Pending', module: 'Academic', date: '22 Jun 2024', scores: { L: '6.5', R: '6.5', W: '6.0', S: '7.0', overall: '6.5' }, dispatchStatus: 'Pending', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop', idDoc: 'https://images.unsplash.com/photo-1633519803362-e6e222955f05?w=400&h=300&fit=crop' },
  { id: 'P3456789', name: 'Liam Johnson', idType: 'Passport', session: 'TS-240622', status: 'Present', module: 'Academic', date: '22 Jun 2024', scores: { L: '8.5', R: '8.0', W: '7.5', S: '8.0', overall: '8.0' }, dispatchStatus: 'Sent', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop', idDoc: 'https://images.unsplash.com/photo-1633519803362-e6e222955f05?w=400&h=300&fit=crop' },
  { id: 'P4567890', name: 'Mei Lin', idType: 'Passport', session: 'TS-240622', status: 'Pending', module: 'Academic', date: '22 Jun 2024', scores: { L: '7.0', R: '7.5', W: '6.5', S: '7.0', overall: '7.0' }, dispatchStatus: 'Pending', photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop', idDoc: 'https://images.unsplash.com/photo-1633519803362-e6e222955f05?w=400&h=300&fit=crop' },
  { id: 'P5678901', name: 'Diego Garcia', idType: 'Passport', session: 'TS-240622', status: 'Absent', module: 'General Training', date: '22 Jun 2024', scores: { L: '6.0', R: '6.0', W: '5.5', S: '6.5', overall: '6.0' }, dispatchStatus: 'Sent', photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop', idDoc: 'https://images.unsplash.com/photo-1633519803362-e6e222955f05?w=400&h=300&fit=crop' },
  { id: 'P6789012', name: 'Priya Patel', idType: 'Passport', session: 'TS-240622', status: 'Pending', module: 'Academic', date: '22 Jun 2024', scores: { L: '7.5', R: '7.0', W: '6.5', S: '7.0', overall: '7.0' }, dispatchStatus: 'Pending', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop', idDoc: 'https://images.unsplash.com/photo-1633519803362-e6e222955f05?w=400&h=300&fit=crop' },
];

export const mockVenues = [
  { name: 'Birmingham IELTS Test Center', location: 'Birmingham, UK', rooms: 8, capacity: 240, status: 'Active' },
  { name: 'London Center', location: 'London, UK', rooms: 12, capacity: 360, status: 'Active' },
  { name: 'Manchester Center', location: 'Manchester, UK', rooms: 6, capacity: 180, status: 'Active' },
  { name: 'Leeds Center', location: 'Leeds, UK', rooms: 5, capacity: 150, status: 'Inactive' },
];

export const mockMalpractice = [
  { id: 'MP-101', candidate: 'Diego Garcia', session: 'TS-240622', type: 'Mobile Phone', severity: 'High', status: 'Open' },
  { id: 'MP-102', candidate: 'John Doe', session: 'TS-240615', type: 'Speaking Extra Time', severity: 'Low', status: 'Resolved' },
];