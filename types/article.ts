export interface ArticleDescription {
  subtitle: string;
  text: string;
}

export interface ArticleAuthor {
  name: string;
  role: string;
  bio: string;
  image: string;
  slug: string;
  email: string;
}

export interface Article {
  category: string;
  title: string;
  slug: string;
  image: string;
  date: string;
  shortdescription: string;
  description: ArticleDescription[];
  author: ArticleAuthor;
}
