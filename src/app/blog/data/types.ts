export interface Blog {
  title: string;
  slug: string;
  summary: string;
  description?: string;
  content: string;  
  date: string;
  category: string;
  author: string;
  keywords: string[];
}
