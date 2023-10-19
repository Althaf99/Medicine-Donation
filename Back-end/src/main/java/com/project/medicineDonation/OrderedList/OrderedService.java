package com.project.medicineDonation.OrderedList;


import com.project.medicineDonation.Donor.Donor;
import com.project.medicineDonation.Donor.DonorRepository;
import com.project.medicineDonation.Medicine.Medicine;
import com.project.medicineDonation.Medicine.MedicineDetailsDto;
import com.project.medicineDonation.Medicine.MedicineDto;
import com.project.medicineDonation.Medicine.MedicineRepository;
import com.project.medicineDonation.OrderedList.DTO.OrderDetailsDto;
import com.project.medicineDonation.OrderedList.DTO.OrderDetailsRepository;
import com.project.medicineDonation.Patient.Patient;
import com.project.medicineDonation.Patient.PatientRepository;
import io.micrometer.common.util.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class OrderedService {
    @Autowired
    OrderedRepository orderedRepository;

    @Autowired
    MedicineRepository medicineRepository;

    @Autowired
    PatientRepository patientRepository;

    @Autowired
    DonorRepository donorRepository;

    @Autowired
    OrderDetailsRepository orderDetailsRepository;

    public void createOrder(OrderedList orderedList) {
//        medicineRepository.deleteById();
//        List<Medicine> medicine = new ArrayList<>();
//        medicineRepository.findAll(Specification.where(medicineIdEquals(medicineId))).forEach(updated -> medicine.add((Medicine) updated));
//
//        List<Patient> patient = new ArrayList<>();
//        patientRepository.findAll(Specification.where(patientIdEquals(patientId))).forEach(updated -> patient.add((Patient) updated));
        orderedRepository.save(orderedList);
    }
//    private Specification<OrderedList> medicineIdEquals(final Integer medicineId) {
//            return medicineId == null ? null : (root, query, builder) -> builder.equal(root.get("medicineId"), medicineId);
//    }

    private Specification<OrderedList> patientIdEquals(final Integer patientId) {
       return patientId == null ? null : (root, query, builder) -> builder.equal(root.get("patientId"), patientId);

    }


    public List<OrderDetailsDto> getOrders( Integer patientId) {
        OrderDetailsDto orderDetails = new OrderDetailsDto();
         List<OrderedList> orderedList = new ArrayList<>();
        List<OrderDetailsDto> fullList = new ArrayList<>();
        List<Donor> donor = new ArrayList<>();
        List<MedicineDto> medicine = new ArrayList<>();
         orderedRepository.findAll(Specification.where(patientIdEquals(patientId))).forEach(updated -> orderedList.add((OrderedList) updated));
        orderedList.forEach(c->{
            c.getMedicine().forEach((o)->{
                medicineRepository.findAll(Specification.where(medicineIdEquals(o.getMedicineId()))).forEach(updated -> medicine.add((MedicineDto) updated));
                medicine.forEach((med->{
                    med.getMedicine().forEach((m)->{
                        donorRepository.findAll(Specification.where(donorIdEquals(med.getDonorId()))).forEach(updated -> donor.add((Donor) updated));
                        donor.forEach(d->{
                            orderDetails.setExpiryDate(m.getExpiryDate());
                            orderDetails.setLocation(d.getLocation());
                            orderDetails.setMedicineName(m.getMedicineName());
                            orderDetails.setPrescription(m.getPrescription());
                            orderDetails.setPharmacyName(d.getPharmacyName());
                            orderDetails.setPharmacyEmail(d.getEmail());
                            fullList.add(orderDetails);
                    });
                    });
                }));
            });
            });

        orderDetailsRepository.saveAll(fullList);
        return orderDetailsRepository.findAll();
    }

    private Specification<MedicineDto> medicineIdEquals(final Integer medicineId) {
        return medicineId == null ? null : (root, query, builder) -> builder.equal(root.get("id"), medicineId);
    }

    private Specification<Donor> donorIdEquals(final Integer donorId) {
        return donorId == null ? null : (root, query, builder) -> builder.equal(root.get("id"), donorId);
    }

    public void deletePatient(int id) {
        orderedRepository.deleteById(id);
    }

    public ResponseEntity<Object> updatePatient(int id, OrderedList orderedList) {
        //check if employee exist in database
        Optional<OrderedList> patientObje = orderedRepository.findById(id);
        OrderedList orderedListDetails = patientObje.get();
        if (patientObje != null) {
            return new ResponseEntity<>(orderedRepository.save(orderedListDetails), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
