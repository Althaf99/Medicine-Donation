package com.project.medicineDonation.OrderedList.DTO;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderDetailsDto {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String medicineName;

    private String pharmacyName;

    private String patientName;

    private String expiryDate;

    private String prescription;

    private String quantity;

    private String location;

    private String pharmacyEmail;

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }

    public void setPrescription(String prescription) {
        this.prescription = prescription;
    }

    public void setMedicineName(String medicineName) {
        this.medicineName = medicineName;
    }

    public void setExpiryDate(String expiryDate) {
        this.expiryDate = expiryDate;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setPatientName(String patientName) {
        this.patientName = patientName;
    }

    public void setPharmacyEmail(String pharmacyEmail) {
        this.pharmacyEmail = pharmacyEmail;
    }

    public void setPharmacyName(String pharmacyName) {
        this.pharmacyName = pharmacyName;
    }

    public String getPrescription() {
        return prescription;
    }

    public String getExpiryDate() {
        return expiryDate;
    }

    public String getQuantity() {
        return quantity;
    }

    public String getMedicineName() {
        return medicineName;
    }

    public int getId() {
        return id;
    }

    public String getLocation() {
        return location;
    }

    public String getPatientName() {
        return patientName;
    }

    public String getPharmacyEmail() {
        return pharmacyEmail;
    }

    public String getPharmacyName() {
        return pharmacyName;
    }

}