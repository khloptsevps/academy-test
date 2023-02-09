import { getPayload } from './handlerPayload';

type windowType = typeof window;

export const body = (window: windowType) => getPayload(window);
// return 'I must return a string';
