import { createClient } from 'contentful';

const client = createClient({
  space: "a3clgdapj9b5",
  accessToken: "mnjS_1_KBIfWnFU6sTNydZVzJiaw7NeGa8GcgZIU5rI",
});

// Retrieve the list of film data from Contentful
const getFilms = async () => {
  const response = await client.getEntries({
    content_type: 'shortFilm',
  });

  return response.items;
};

const getFilm = async (filmSlug:any) => {
  try {
    const response = await client.getEntries({
      content_type: 'shortFilm',
      'fields.slug': filmSlug[0],
    });
        
    return response.items[0];
  }catch(e) {
    console.log(e)
  }
}

export {getFilms, getFilm};