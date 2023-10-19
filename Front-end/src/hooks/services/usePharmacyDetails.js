import { useQuery } from "react-query";
import axios from "axios";

const useGetPharmacyDetails = ({
  pharmacyName,
  location,
  email,
  phoneNumber,
}) => {
  const fetchRequest = async () => {
    const query = new URLSearchParams();
    if (pharmacyName) {
      query.append("pharmacyName", pharmacyName);
    }
    if (location) {
      query.append("location", location);
    }
    if (email) {
      query.append("po", email);
    }
    if (phoneNumber) {
      query.append("phoneNumber", phoneNumber);
    }
    try {
      const data = await axios.get(
        `http://localhost:8080/GetDonorDetails?${query.toString()}`
      );

      return data.data;
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return useQuery(
    ["pharmacyDetails", pharmacyName, location, email, phoneNumber],
    fetchRequest,
    {
      refetchOnWindowFocus: false,
    }
  );
};

export default useGetPharmacyDetails;
