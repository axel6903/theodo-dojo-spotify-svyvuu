const apiToken = 'BQDnFy7hJn_8NfWt_5Nvh4jomdJihw9r5GPoBj_gQwCJjMC0G8F5y3sC0I8sQbWbbneIuxO2Q9yR_R5Vu-c-3KJH6eJPiEuI9mGGHwdZgvGhDAKULnCTjRj4m6YM0F3zazpf0hVZQje-nQhmiIBIvKQPLVqFEsXBJJuNspCIRqSxHHz-AMoG8syFtES4ffjd8NIEj5DI6J7Oishu2IPQRlmwbg';



export const fetchTracks = async () => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
     throw new Error(`Fetching tracks failed with status ${response.status}`)
   }
  const data = await response.json() as { items: unknown[] };

  return data.items;
};