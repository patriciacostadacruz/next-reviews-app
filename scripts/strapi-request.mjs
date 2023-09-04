import { writeFileSync } from 'node:fs';
import qs from 'qs';

// populate is needed for CMS to add images and media data
const url =
  'http://localhost:1337/api/reviews' +
  '?' +
  qs.stringify(
    {
      fields: ['slug', 'title', 'subtitle', 'publishedAt', 'body'],
      // to retrieve all fields
      // populate: '*'
      filters: { slug: { $eq: 'hades-2018' } },
      populate: { image: { fields: ['url'] } },
      pagination: { pageSize: 1, withCount: false },
    },
    { encodeValuesOnly: true }
  );
const response = await fetch(url);
const body = await response.json();
const formatted = JSON.stringify(body, null, 2);
const file = 'scripts/strapi-response.json';
writeFileSync(file, formatted, 'utf8');
