package com.project.medicineDonation.Medicine;


import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

public class MedicineDto {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private int donorId;


    private List<MedicineDetailsDto> medicines = new ArrayList<>();

    public void setMedicine(List<MedicineDetailsDto> medicine) {
        this.medicines = medicine;
    }

    public int getDonorId() {
        return donorId;
    }

    public List<MedicineDetailsDto> getMedicine() {
        return medicines;
    }

    public void setDonorId(int donorId) {
        this.donorId = donorId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
