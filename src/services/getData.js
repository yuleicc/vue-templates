import http from './http'

export const postLogin = ({ username, password }) => {
  return http.post('/authorizations', {
    username: username,
    password: password
  })
}

// get current user's data
export const loadUserData = () => http.get('/me').catch(() => {})

// revoke current token
export const revokeToken = token => http.post('/oauth/tokens/' + token)
