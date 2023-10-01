package com.project.medicineDonation.Medicine;

import com.project.medicineDonation.Medicine.Medicine;
import com.project.medicineDonation.Medicine.MedicineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class MedicineService {

    @Autowired
    MedicineRepository medicineRepository;

    public void CreateMedicine(Medicine medicine) {
        medicineRepository.save(medicine);
    }

    public List<Medicine> getAllMedicines() {
        return medicineRepository.findAll();
    }

    public void deleteMedicine(int id) {
        medicineRepository.deleteById(id);
    }

    public ResponseEntity<Object> updateMedicine(int id, Medicine medicine) {
        //check if employee exist in database
        Optional<Medicine> medicineObje = medicineRepository.findById(id);
        Medicine medicineDetails = medicineObje.get();
        if (medicineObje != null) {
            return new ResponseEntity<>(medicineRepository.save(medicineDetails), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
