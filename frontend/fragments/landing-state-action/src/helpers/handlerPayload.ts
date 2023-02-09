import { getMessage } from './message';

type windowType = typeof window;

export const getPayload = (window: windowType) => new Error(getMessage(window));
