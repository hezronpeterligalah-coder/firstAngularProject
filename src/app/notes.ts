export interface Note {
  id: number;
  title: string;
  text: string;
}
export const NOTES: Note[] = [
  {
    id: 1,
    title: 'First Note',
    text: 'This is my first note'
  },
  {
    id: 2,
    title: 'Shakespeare',
    text: 'To be, or not to be, that is the question'
  },
];
