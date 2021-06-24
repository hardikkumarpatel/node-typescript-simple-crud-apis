export interface UsersInterfaceService{
   list: () => Promise<any>;
   create: (resource: any) => Promise<any>;
   putById: (id: string, resource: any) => Promise<any>;
   readById: (id: string) => Promise<any>;
   deleteById: (id: any) => Promise<any>;
}
