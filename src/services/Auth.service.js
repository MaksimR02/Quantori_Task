export default async function authorize({ login, password }) {
  // we can pass login and pass from form, but there is no registration mechanism
  return fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: 'emilys',
      password: 'emilyspass',
      expiresInMins: 30,
    }),
  }).then((res) => res.json());
}