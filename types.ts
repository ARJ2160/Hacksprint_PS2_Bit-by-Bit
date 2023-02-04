export interface booksType {
  id?: number;
  title?: string;
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

export interface forgotPassword {
  email: string;
  phone: string;
}
export interface Errors {
  email: string;
  password: string;
}

export interface formValues extends genericSignup {}

export interface genericSignup {
  name?: string;
  email: string;
  password: string;
  phone?: string;
  address?: string;
  rememberMe?: boolean;
}

export interface PaginationTypes {
  length: number;
}

export interface useValidateProps {
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>;
  formValues: genericSignup;
  mode: 'signin' | 'signup' | 'forgotPassword';
  rememberMe?: boolean;
}
