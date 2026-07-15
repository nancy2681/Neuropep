export type Message = {
  id: string;
  sender: 'agent' | 'user';
  text: string;
  showCard?: boolean;
};

export const initialMessages: Message[] = [
  {
    id: '1',
    sender: 'agent',
    text: "Hey! Just tell me what you're adding — name, dose, cycle and how much BAC water. I'll handle the rest",
  },
  {
    id: '2',
    sender: 'user',
    text: 'Add 5mcg of BPC and 5 ml of BAC water with the cycle of 7 days on and 7 days off from today upto june 2026.',
  },
  {
    id: '3',
    sender: 'agent',
    text: 'Hurray ! I have added your medication and you can review it.',
    showCard: true,
  },
];

export const suggestionPills = [
  { label: 'Add 5mcg , 5 ml of BPC', value: 'Add 5mcg , 5 ml of BPC' },
  { label: 'Add 5mcg , 5 ml of BPC', value: 'Add 5mcg , 5 ml' },
  { label: 'Add 5mcg , 5 ml of BPC', value: 'Add 5mcg , 5 ml' },
];
