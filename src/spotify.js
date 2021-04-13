//* Documentaion Link
// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/

export const authEndpoint = 'https://accounts.spotify.com/authorize';
const redirectUrl = 'http://localhost:3000/';
const clientId = '4bf406bb4ba94a3d814510d6d3afd09c';

const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
];

//* %20 - ASCII code for space
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(
  '%20'
)}&response_type=token`;
