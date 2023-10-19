import { useQuery } from "react-query";
import axios from "axios";

const useGetOrdersList = ({ patientId }) => {
  const fetchRequest = async () => {
    const query = new URLSearchParams();
    if (patientId) {
      query.append("patientId", patientId);
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

  return useQuery(["ordersData", patientId], fetchRequest, {
    refetchOnWindowFocus: false,
  });
};

export default useGetOrdersList;
