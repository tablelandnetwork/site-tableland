import { getClient, IConfigCatClient } from "configcat-js-ssr"

let _client: IConfigCatClient

function client(): IConfigCatClient {
  if (_client) {
    return _client
  }
  _client = getClient(process.env.CONFIGCAT_API_KEY!)
  return _client
}

export async function getFlag(
  key: string,
  userId: string | undefined
): Promise<[boolean, string]> {
  const details = await client().getValueDetailsAsync(
    key,
    false,
    userId ? { identifier: userId } : undefined
  )

  // Add flag value to variation id, e.g., myFeatureA-{id} or myFeatureB-{id}
  // This adds human-readable context that's useful in the Amplitude dash
  if (!details.variationId) {
    return [details.value, "unknown"]
  }
  const variant = key.substring(0, key.length - 1) + (details.value ? "B" : "A")
  return [details.value, [variant, details.variationId].join("-")]
}
