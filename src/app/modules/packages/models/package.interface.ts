export interface IPackage {
  id: string;
  weeklyDownloads: number;
  dependencyCount: number;
}

export interface IFullPackage extends IPackage {
  dependencies: string[];
}
