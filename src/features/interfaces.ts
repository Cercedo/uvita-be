export interface ServiceInterface<TParams = void, TReturn = void> {
  execute: (params: TParams) => TReturn;
}
