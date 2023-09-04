// readdir allows access to list all files in directory
import matter from 'gray-matter';
import { marked } from 'marked';
import { readdir, readFile } from 'node:fs/promises';
import qs from 'qs';

const CMS_URL = 'http://localhost:1337';

export interface Review {
  slug: string;
  title: string;
  date: string;
  image: string;
  body: string;
}

export interface FullReview extends Review {
  body: string;
}

export async function getReview(slug: string): Promise<FullReview> {
  const text = await readFile(`./content/reviews/${slug}.md`, 'utf8');
  // returns content property from the file (the review, here) and the data is the front matter
  const {
    content,
    data: { title, date, image },
  } = matter(text);
  const body = marked(content);
  return { slug, title, date, image, body };
}

export async function getReviews(): Promise<Review[]> {
  const url =
    `${CMS_URL}/api/reviews?` +
    qs.stringify(
      {
        fields: ['slug', 'title', 'subtitle', 'publishedAt'],
        // to retrieve all fields
        // populate: '*'
        populate: { image: { fields: ['url'] } },
        sort: ['publishedAt:desc'],
        pagination: { pageSize: 6 },
      },
      { encodeValuesOnly: true }
    );
  const response = await fetch(url);
  const { data } = await response.json();
  return data.map((item) => ({
    slug: item.attributes.slug,
    title: item.attributes.title,
    date: item.attributes.publishedAt.slice(0, 'yyyy-mm-dd'.length),
    image: CMS_URL + item.attributes.image.data.attributes.url,
  }));
}

export async function getFeaturedReview(): Promise<Review> {
  const reviews = await getReviews();
  const featuredReview = reviews[0];
  return featuredReview;
}

export async function getSlugs(): Promise<string[]> {
  const files = await readdir('./content/reviews');
  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.slice(0, -'.md'.length));
}
