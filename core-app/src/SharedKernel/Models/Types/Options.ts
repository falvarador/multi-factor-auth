export type Options = {
  body?: object;
  headers: { [key: string]: string };
  method: string;
  signal: AbortSignal;
  time: number;
};
