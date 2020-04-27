export interface IHttpResponse<T> extends Response {
  parsedBody?: T;
}

export async function http<T>(request: RequestInfo): Promise<IHttpResponse<T>> {
  const response: IHttpResponse<T> = await fetch(request);

  try {
    response.parsedBody = await response.json();
  } catch (error) {
    throw new Error(error);
  }

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
}
