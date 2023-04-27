import { getClient, IConfigCatClient } from "configcat-js-ssr"

let _client: IConfigCatClient

function client(): IConfigCatClient {
  if (_client) {
    return _client
  }
  _client = getClient(process.env.CONFIGCAT_API_KEY!)
  return _client
}

export async function getBoolFlag(
  key: string,
  userId?: string
): Promise<string> {
  const value = await client().getValueAsync(
    key,
    false,
    userId ? { identifier: userId } : undefined
  )

  return value ? "B" : "A"
}

export async function getStringFlag(
  key: string,
  userId?: string
): Promise<string> {
  const value = await client().getValueAsync(
    key,
    "A",
    userId ? { identifier: userId } : undefined
  )
  return value
}
