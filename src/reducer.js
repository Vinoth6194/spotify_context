export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token: null,
  //* gets authenticated by default as the token is set, Remove after dev
  token:
    'BQDbUUiJ8vksvoWzzt7bjMY6k5_c2HUIaNZDKYqVE3D8dWVllElYhkg5swc6GYP5vGkqb7dK7x0tLQnIjF3Ljb9y7olZDXetQF0poHdfvJPoe6Rrtf1XG3Vga2tG_GjLA4WMVjpUmZnJFsRS4G-WZLMoDuN-NdjD--HyAZfCNj989Kyw',
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
