package com.project.medicineDonation.Medicine;

public class MedicineDetailsDto {

    private String medicineName;

    private String expiryDate;

    private String prescription;

    private String manufactureDate;

    private String quantity;

    public void setExpiryDate(String expiryDate) {
        this.expiryDate = expiryDate;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }

    public void setPrescription(String prescription) {
        this.prescription = prescription;
    }

    public String getExpiryDate() {
        return expiryDate;
    }

    public String getPrescription() {
        return prescription;
    }

    public void setManufactureDate(String manufactureDate) {
        this.manufactureDate = manufactureDate;
    }

    public String getQuantity() {
        return quantity;
    }

    public String getManufactureDate() {
        return manufactureDate;
    }

    public String getMedicineName() {
        return medicineName;
    }

    public void setMedicineName(String medicineName) {
        this.medicineName = medicineName;
    }
}
