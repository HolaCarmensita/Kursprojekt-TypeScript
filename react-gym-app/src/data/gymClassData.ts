export interface GymClass {
  gymClassName: string;
  date: string;
  time: string;
  trainerName: string;
}

const gymClasses: GymClass[] = [
  {
    gymClassName: 'Yoga Class',
    date: '2023-09-25',
    time: '14:00 AM',
    trainerName: 'Casandra',
  },
  {
    gymClassName: 'Spinning Class',
    date: '2023-09-26',
    time: '14:00 AM',
    trainerName: 'Casandra',
  },
];

export default gymClasses;
