const { STRAPI_HOST, STRAPI_TOKEN } = process.env

export async function query(url: string) {
  return await fetch(`${STRAPI_HOST}/api/${url}`, {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
  }).then((res) => res.json())
}
