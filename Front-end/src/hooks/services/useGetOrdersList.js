import { useQuery } from "react-query";
import axios from "axios";

import { ROLE } from "../../constants";

const useGetOrdersList = ({ id, role }) => {
  const fetchRequest = async () => {
    const query = new URLSearchParams();
    if (id) {
      if (ROLE.PHARMACY === role) {
        query.append("pharmacyId", id);
      } else if (ROLE.USER === role) {
        query.append("patientId", id);
      }
    }
    try {
      const data = await axios.get(
        `http://localhost:8080/getOrders?${query.toString()}`
      );

      return data.data;
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return useQuery(["ordersData", id], fetchRequest, {
    refetchOnWindowFocus: false,
  });
};

export default useGetOrdersList;
