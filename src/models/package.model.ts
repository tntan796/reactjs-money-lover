export default class PackageModel {
   Id: number = 0;
   Name: string = '';
   Icon: string = '';
   ParentId: number = 0;
   IsIncome: boolean = true;
   Childs: PackageModel[] = [];
}