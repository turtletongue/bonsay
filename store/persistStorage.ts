import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

const createNoopStorage = () => {
  return {
    async getItem(key: any) {
      return null;
    },
    async setItem(key: any, value: any) {
      return value;
    },
    async removeItem(key: any) {}
  };
};

export const persistStorage =
  typeof window !== 'undefined'
    ? createWebStorage('local')
    : createNoopStorage();

export default persistStorage;
