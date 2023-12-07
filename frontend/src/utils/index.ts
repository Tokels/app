// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function handleGenericAsyncErrors<A extends any[]>(
  p: (...args: A) => Promise<void>,
): (...args: A) => void {
  return (...args: A) => {
    try {
      p(...args).catch((err) => console.log('Error thrown asynchronously', err));
    } catch (err) {
      console.log('Error thrown synchronously', err);
    }
  };
}
