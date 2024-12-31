export async function safeAwait<T>(
  promise: Promise<T>,
): Promise<{ data: T | undefined; error: unknown }> {
  try {
    const data = await promise
    return { data, error: undefined }
  } catch (error) {
    return { data: undefined, error }
  }
}
