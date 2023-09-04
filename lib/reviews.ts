import { marked } from 'marked';
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
  const url =
    `${CMS_URL}/api/reviews?` +
    qs.stringify(
      {
        fields: ['slug', 'title', 'subtitle', 'publishedAt', 'body'],
        // to retrieve all fields
        // populate: '*'
        filters: { slug: { $eq: slug } },
        populate: { image: { fields: ['url'] } },
        pagination: { pageSize: 1, withCount: false },
      },
      { encodeValuesOnly: true }
    );
  const response = await fetch(url);
  const { data } = await response.json();
  const item = data[0];
  return {
    slug: item.attributes.slug,
    title: item.attributes.title,
    date: item.attributes.publishedAt.slice(0, 'yyyy-mm-dd'.length),
    image: CMS_URL + item.attributes.image.data.attributes.url,
    body: marked(item.attributes.body, { headerIds: false, mangle: false }),
  };
}

export async function getReviews(): Promise<Review[]> {
  const url =
    `${CMS_URL}/api/reviews?` +
    qs.stringify(
      {
        fields: ['slug', 'title', 'subtitle', 'publishedAt'],
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
