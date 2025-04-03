export type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

export enum Status {
  INITIAL,
  INITIALIZED,
  OPERATIONAL,
  PENDING,
  ERROR,
}
