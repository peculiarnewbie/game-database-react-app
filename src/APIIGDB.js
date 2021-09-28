import {
  API_URL,
  CLIENT_ID,
  AUTHORIZATION,
} from './configIGDB';

var myHeaders = new Headers();
myHeaders.append("Client-ID", `${CLIENT_ID}`);
myHeaders.append("Authorization", `Bearer ${AUTHORIZATION}`);
myHeaders.append("Content-Type", "text/plain");

var raw = "fields name, cover.image_id; sort rating desc";

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

const apiSettings = {
  fetchGames: async(searchTerm) => {
    const raw = searchTerm
    ? `search "${searchTerm}"; fields name, cover.image_id; where category = 0 & rating_count > 5; limit 200;`
    : `fields name, cover.image_id; sort aggregated_rating desc; where first_release_date > 1609434000 & rating_count > 1 & aggregated_rating_count > 2; limit 200;`
    requestOptions.body = raw
    return await (await fetch(API_URL, requestOptions)).json();
  },

  fetchFirstGame: async(gameId) => {
    const raw = `fields name, summary, cover.image_id, artworks.image_id, screenshots.image_id; where id = ${gameId};`
    requestOptions.body = raw
    return await (await fetch(API_URL, requestOptions)).json();

  }
};

export default apiSettings;
