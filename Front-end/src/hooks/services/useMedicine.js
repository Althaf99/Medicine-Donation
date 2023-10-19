import { useQuery } from "react-query";
import axios from "axios";

const useGetMedicine = () => {
  const fetchDeliveryNote = async () => {
    try {
      const data = await axios.get(`http://localhost:8080/GetMedicineDetails`);

      return data.data;
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return useQuery(["medicineData"], fetchDeliveryNote, {
    refetchOnWindowFocus: false,
  });
};

export default useGetMedicine;
