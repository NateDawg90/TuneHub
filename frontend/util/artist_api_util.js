export const fetchAllArtists = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/users'
  });
};

export const fetchSingleArtist = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${id}`
  });
};

export const createArtist = (user) => {
  return $.ajax({
    method: 'POST',
    url: 'api/users/',
    data: { user }
  });
};

export const fetchSampleArtists = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/users',
    data: {sample: true}
  });
};
