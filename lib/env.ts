export function getSiteName(): string {
 
  return "GrupCana"
}

export function getSiteDomain(): string {
  if ("PUBLIC_DOMAIN" in process.env) {
    const domain = <string>process.env.PUBLIC_DOMAIN
    return domain.replace(/\/+$/, "")
  }

  return "http://35.173.136.177:8081"
}

export function getRedisURL(): string {
  if ("REDIS_URL" in process.env) {
    return <string>process.env.REDIS_URL
  }

  console.warn(
    "ENV 'REDIS_URL' has no value, using default:",
    "redis://localhost:6379"
  )
  return "redis://localhost:6379"
}

export function getDefaultSrc(): string {
  if ("DEFAULT_SRC" in process.env) {
    return <string>process.env.DEFAULT_SRC
  }

  // console.warn("ENV 'DEFAULT_SRC' has no value, using no src")
  return "https://www.youtube.com/watch?v=Y3fasOwFCrs&list=PLcNWqzWzYG2vjpRziWc7cs8S6TRtLVbJ7"
}
