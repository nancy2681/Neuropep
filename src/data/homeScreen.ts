export interface ChecklistItem {
  id: string;
  title: string;
  dose: string;
  time: string;
}

export const checklistData: ChecklistItem[] = [
  { id: '1', title: 'BPC - 124', dose: '25mcg', time: 'Morning' },
  { id: '2', title: 'BPC - 124', dose: '25mcg', time: 'Morning' },
];
