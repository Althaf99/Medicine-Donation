package com.project.medicineDonation.OrderedList.DTO;

import lombok.*;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OrderedMedicineDto {

    private Integer medicineId;

    private Integer pharmacyId;

    public void setPharmacyId(Integer pharmacyId) {
        this.pharmacyId = pharmacyId;
    }

    public void setMedicineId(Integer medicineId) {
        this.medicineId = medicineId;
    }

    public Integer getMedicineId() {
        return medicineId;
    }

    public Integer getPharmacyId() {
        return pharmacyId;
    }
}
