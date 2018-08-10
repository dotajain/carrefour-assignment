export const post = async ({ url, body, success, failure }) => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    const data = await res.json()
    console.log(data)
    success(data)
  } catch (e) {
    failure(e)
  }
}
