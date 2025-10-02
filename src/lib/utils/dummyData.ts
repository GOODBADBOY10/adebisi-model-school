// TypeScript interfaces
export interface Student {
    id: string;
    name: string;
    email: string;
    class: string;
    department: string;
    status: 'active' | 'inactive';
}

export interface Result {
    studentId: string;
    studentName: string;
    subject: string;
    score: number;
    grade: string;
    term: 'firstTerm' | 'secondTerm' | 'thirdTerm';
    session: string;
}

export interface AnalyticsData {
    totalStudents: number;
    totalTeachers: number;
    averageScore: number;
    passRate: number;
    recentUploads: number;
    pendingApprovals: number;
}

export interface MenuItem {
    id: string;
    label: string;
    icon: React.ComponentType<{ size: number }>;
    hasSubmenu?: boolean;
}

export type ActiveSection = 'dashboard' | 'upload-results' | 'analytics' | 'students' | 'teachers' | 'settings' | 'reports';

// Sample data
export const sampleStudents: Student[] = [
    { id: '1', name: 'John Doe', email: 'john@school.edu', class: 'Grade 12', department: 'Science', status: 'active' },
    { id: '2', name: 'Jane Smith', email: 'jane@school.edu', class: 'Grade 11', department: 'Arts', status: 'active' },
    { id: '3', name: 'Mike Johnson', email: 'mike@school.edu', class: 'Grade 10', department: 'Science', status: 'inactive' },
    { id: '4', name: 'Sarah Wilson', email: 'sarah@school.edu', class: 'Grade 12', department: 'Commercial', status: 'active' },
];

export const analyticsData: AnalyticsData = {
    totalStudents: 1234,
    totalTeachers: 89,
    averageScore: 78.5,
    passRate: 92.3,
    recentUploads: 45,
    pendingApprovals: 12
};

export const recentResults: Result[] = [
    { studentId: '1', studentName: 'John Doe', subject: 'Mathematics', score: 85, grade: 'A', term: 'firstTerm', session: '2024/2025' },
    { studentId: '2', studentName: 'Jane Smith', subject: 'English', score: 92, grade: 'A+', term: 'firstTerm', session: '2024/2025' },
    { studentId: '3', studentName: 'Mike Johnson', subject: 'Physics', score: 76, grade: 'B+', term: 'firstTerm', session: '2024/2025' },
];


export interface RecentResult {
  studentName: string;
  subject: string;
  term: string;
  score: number;
  grade: string;
}