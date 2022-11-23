export interface Issue {
  id: string;
  title: string;
  text: string;
  editMode?: boolean;
  tags: Array<string>;
}
