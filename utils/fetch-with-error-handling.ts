import errorMessages from './error-messages';

export const fetchWithErrorHandling = async (
  fetcher: () => Promise<unknown>,
  rejectWithValue: (value: unknown) => unknown
): Promise<unknown> => {
  try {
    return await fetcher();
  } catch (error) {
    const originalMessage = error.response?.data?.message;

    return rejectWithValue(
      errorMessages[
        Array.isArray(originalMessage) ? originalMessage[0] : originalMessage
      ] || originalMessage
    );
  }
};

export default fetchWithErrorHandling;
