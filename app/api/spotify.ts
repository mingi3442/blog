const SPOTIFY_TOKEN_API = `https://accounts.spotify.com/api/token`
const SPOTIFY_NOW_PLAYING_API = `https://api.spotify.com/v1/me/player/currently-playing`
const SPOTIFY_TOP_TRACKS_API = `https://api.spotify.com/v1/me/top/tracks`

const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID
const client_secret = process.env.NEXT_PUBLIC_SPOTIFY_SECRET_KEY
const refresh_token = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN as string

// const {
//   SPOTIFY_CLIENT_ID: client_id,
//   SPOTIFY_CLIENT_SECRET: client_secret,
//   SPOTIFY_REFRESH_TOKEN: refresh_token,
// } = process.env

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')

async function getAccessToken() {
  const response = await fetch(SPOTIFY_TOKEN_API, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  })

  return response.json()
}

export async function getNowPlaying() {
  const { access_token } = await getAccessToken()
  console.log(access_token)
  const url = new URL(SPOTIFY_NOW_PLAYING_API)
  url.searchParams.append('additional_types', 'track,episode')
  console.log(url.toString())
  return fetch(url.toString(), {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    mode: 'no-cors',
  })
}
