export interface booksType {
  id: number;
  title: string;
  ISBN?: string;
  pageCount?: number;
  publishedDate?: Date;
  thumbnailUrl?: string;
  longDescription?: string;
  status?: string;
  authors?: string[];
  categories?: string[];
  price?: number;
}

export interface Errors {
  email: string;
  password: string;
}

export interface formValues extends Errors {}

export interface genericSignup {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
}
