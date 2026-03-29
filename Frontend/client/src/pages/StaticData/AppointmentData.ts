export interface Appointment {
  id: string;
  patientName: string;
  doctorName: string;
  department: string;
  date: string;        // ISO format
  time: string;
  status: "scheduled" | "completed" | "cancelled";
  location: string;
  notes?: string;
  avatar?: string;
}

export const appointments: Appointment[] = [
  {
    id: "apt-001",
    patientName: "Rahul Sharma",
    doctorName: "Dr. Ankit Verma",
    department: "Cardiology",
    date: "2026-04-01",
    time: "10:30 AM",
    status: "scheduled",
    location: "Room 201",
    notes: "Follow-up for blood pressure",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: "apt-002",
    patientName: "Priya Das",
    doctorName: "Dr. Neha Kapoor",
    department: "Dermatology",
    date: "2026-04-02",
    time: "12:00 PM",
    status: "completed",
    location: "Room 305",
    notes: "Skin allergy check",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: "apt-003",
    patientName: "Amit Roy",
    doctorName: "Dr. Sandeep Gupta",
    department: "Orthopedics",
    date: "2026-04-03",
    time: "09:00 AM",
    status: "cancelled",
    location: "Room 110",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: "apt-004",
    patientName: "Sneha Paul",
    doctorName: "Dr. Ritu Singh",
    department: "Gynecology",
    date: "2026-04-04",
    time: "02:15 PM",
    status: "scheduled",
    location: "Room 220",
    notes: "Routine checkup",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: "apt-005",
    patientName: "Arjun Mukherjee",
    doctorName: "Dr. Vivek Mehta",
    department: "Neurology",
    date: "2026-04-05",
    time: "04:45 PM",
    status: "scheduled",
    location: "Room 410",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
];