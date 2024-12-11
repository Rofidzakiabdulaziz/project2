import { AxiosError } from 'axios';

export const handleAxiosError = (error: unknown): string => {
  if (error instanceof AxiosError) {
    return error.response?.data?.message || error.message;
  }
  return 'Unexpected error occurred';
};
