export const getTokenFromLocalStorage = () => {
  return window.localStorage.getItem('project-4')
}

export const getPayload = () => {
  const token = getTokenFromLocalStorage()
  
  if (!token) return

  const payload = token.split('.')[1]
  
  // console.log(JSON.parse(atob(payload)))
  return JSON.parse(atob(payload))
}

// ? function that checks that user is authenticated
export const userIsAuthenticated = () => {
 
  const payload = getPayload()

  if (!payload) return false
 
  const currentTime = Math.floor(Date.now() / 1000)


  return currentTime < payload.exp
}

