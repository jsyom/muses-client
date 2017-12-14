export interface ILocalStorageEvent {
  key: string;
  // Probably a typo, but keeping to stay consistent with
  // angular-local-storage:
  newvalue?: any;
  storageType: string;
}

export interface INotifyOptions {
  setItem?: boolean;
  removeItem?: boolean;
}

export interface ILocalStorageServiceConfig {
  // Properties:
  notifyOptions?: INotifyOptions;
  prefix?: string;
  storageType?: 'sessionStorage' | 'localStorage';
}
