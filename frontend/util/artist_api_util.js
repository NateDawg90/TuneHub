export const fetchAllArtist = () => {
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
