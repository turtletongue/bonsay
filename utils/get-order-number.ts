import { Id } from '@app/declarations';

export const getOrderNumber = (id: Id) => String(id).padStart(6, '0');
