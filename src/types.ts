export interface Book {
  id: number;
  title: string;
  author: string;
  categories: string[];
  thumbnail: string;
}

export interface IFormData {
  title: string;
  description: string;
  thumbLink: string;
  author: string;
  fileLink: string;
  category: string[];
}

export interface IFormInput {
  label: string;
  placeholder: string;
  id: keyof IFormData;
}
