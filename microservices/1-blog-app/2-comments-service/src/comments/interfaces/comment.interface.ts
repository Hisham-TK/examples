export interface Comment {
  id: string;
  content: string;
  status: 'rejected' | 'approved' | 'postponed';
}
