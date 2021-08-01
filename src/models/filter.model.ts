export default class FilterModel {
    filter: string = "";
    offSet: number = 0;
    pageSize: number = 10;

    FilterModel(filter: string = '', offSet: number = 0, pageSize: number = 10) {
        filter = filter;
        offSet = offSet;
        pageSize = pageSize;
    }
 }