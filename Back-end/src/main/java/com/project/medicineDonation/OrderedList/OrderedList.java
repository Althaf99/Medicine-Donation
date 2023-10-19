package com.project.medicineDonation.OrderedList;


import com.project.medicineDonation.OrderedList.DTO.OrderedMedicineDto;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderedList {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;



    private Integer patientId;

    private List<OrderedMedicineDto> medicine = new ArrayList<>();

    public List<OrderedMedicineDto> getMedicine() {
        return medicine;
    }

    public int getId() {
        return id;
    }
//
//    public Integer getMedicineId() {
//        return medicineId;
//    }

    public Integer getPatientId() {
        return patientId;
    }

    public void setMedicine(List<OrderedMedicineDto> medicine) {
        this.medicine = medicine;
    }
//    public Integer getPharmacyId() {
//        return pharmacyId;
//    }

    public void setId(int id) {
        this.id = id;
    }

//    public void setMedicineId(Integer medicineId) {
//        this.medicineId = medicineId;
//    }

    public void setPatientId(Integer patientId) {
        this.patientId = patientId;
    }

//    public void setPharmacyId(Integer pharmacyId) {
//        this.pharmacyId = pharmacyId;
//    }

}
