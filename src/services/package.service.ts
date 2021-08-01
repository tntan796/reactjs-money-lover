import axiosInstance from "./axios.service";
import CONSTANTS from "../common/constants";
import FilterModel from "../models/filter.model";
class PackageService {

  getPackages(query: FilterModel = new FilterModel()) {
    return axiosInstance.get(`${CONSTANTS.BASE_API}/api/Package?filter=${query.filter}&offSet=${query.offSet}&pageSize=${query.pageSize}`)
  }
}

export default new PackageService();