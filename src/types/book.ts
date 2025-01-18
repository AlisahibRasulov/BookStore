export interface Book {
  title: string;
  subtitle: string;
  isbn13: string;
  price: number;
  image: string;
  url: string;
}

export interface BookDetails {
  title: string;
  subtitle: string;
  price: string;
  authors: string;
  publisher: string;
  isbn13: string;
  pages: string;
  rating: string;
  desc: string;
  image: string;
  url: string;
}

export interface APIResponse {
  books: Book[];
  details: BookDetails[];
}
