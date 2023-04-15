import {
  getClient,
  IConfigCatClient,
  IEvaluationDetails,
} from "configcat-js-ssr"

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
  id: string | undefined
): Promise<IEvaluationDetails> {
  return client().getValueDetailsAsync(
    key,
    false,
    id ? { identifier: id } : undefined
  )
}
