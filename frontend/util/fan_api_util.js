export const fetchAllFans = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/users'
  });
};

export const fetchSingleFan = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${id}`
  });
};

export const createFan = (user) => {
  return $.ajax({
    method: 'POST',
    url: 'api/users/',
    data: { user }
  });
};
