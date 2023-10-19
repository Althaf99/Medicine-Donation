package com.project.medicineDonation.Medicine;

import com.project.medicineDonation.Medicine.Medicine;
import com.project.medicineDonation.Medicine.MedicineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:3006")
@RestController
public class MedicineController {

    @Autowired
    MedicineService medicineService;


    @PostMapping("/CreateMedicine")
    private void CreateMedicine(@RequestBody Medicine medicine){
        medicineService.CreateMedicine(medicine);
    }

    @GetMapping("/GetMedicineDetails")
    private List<Medicine> getMedicine(){
        return medicineService.getAllMedicines();
    }

    @DeleteMapping("DeleteMedicine/{id}")
    private void deleteMedicine(@PathVariable int id){
        medicineService.deleteMedicine(id);
    }

    @PutMapping("UpdateMedicineDetail/{id}")
    private ResponseEntity<Object> updateMedicine(@PathVariable int id, @RequestBody Medicine medicine){
        return medicineService.updateMedicine(id,medicine);
    }
}
