export default class PackageModel {
   Id: string = '';
   Name: string = '';
   Icon: string = '';
   ParentId: string = "";
   IsIncome: boolean = true;
   WalletId: string = '';
   AccountId: string = '';
   Childs: PackageModel[] = [];
}