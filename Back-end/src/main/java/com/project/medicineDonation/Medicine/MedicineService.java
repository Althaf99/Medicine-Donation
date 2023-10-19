package com.project.medicineDonation.Medicine;

import com.project.medicineDonation.Medicine.Medicine;
import com.project.medicineDonation.Medicine.MedicineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class MedicineService {

    @Autowired
    MedicineRepository medicineRepository;

    public void CreateMedicine(MedicineDto medicineDto) {
        List<Medicine> newList = new ArrayList<>();
        medicineDto.getMedicine().forEach(u->{
                Medicine coursesObj = new Medicine();
                coursesObj.setId(.getCourseId());
                coursesObj.setCourseDescription(coursesDto.getCourseDescription());
                coursesObj.setCourseName(coursesDto.getCourseName());
                coursesObj.setGrade(coursesDto.getGrade());
                coursesObj.setUnitName(u.getUnitName());
                coursesObj.setFileName(p.getFileName());
                coursesObj.setFilePath(p.getFilePath());
                coursesObj.setFileSize(p.getFileSize());
                coursesObj.setCourseId(coursesDto.getCourseId());
                newList.add(coursesObj);
        });
        courseRepo.saveAll(newList);


        medicineRepository.save(medicine);
    }

    public List<MedicineDto> getAllMedicines() {
        return medicineRepository.findAll();
    }

    public void deleteMedicine(int id) {
        medicineRepository.deleteById(id);
    }

    public ResponseEntity<Object> updateMedicine(int id, MedicineDto medicine) {
        //check if employee exist in database
        Optional<MedicineDto> medicineObje = medicineRepository.findById(id);
        MedicineDto medicineDetails = medicineObje.get();
        if (medicineObje != null) {
            return new ResponseEntity<>(medicineRepository.save(medicineDetails), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
