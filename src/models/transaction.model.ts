export default class Transaction {
    Id: string = '';
    AccountId: string = ''; // Lấy thông tin trong sessionStorage
    CategoryId: string = ''; // Nhóm
    WalletId: string = ''; // Ví nào
    Name?: string = '';
    Amount?: number = 0;
    CreateAt?: Date = new Date();
    ExportReport?: boolean = false;
    Note?: string = '';
    Remind?: boolean = false;
    Image?: string = '';
    Campaign?: string = '';
    Latitue?: number = 0;
    Longtitue?: number = 0;
    EditByUserId?: string = '';
    With?: string = '';
    Metadata?: string = '';
}