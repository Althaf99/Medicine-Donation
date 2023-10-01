package com.project.medicineDonation.Donor;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DonorService {

    @Autowired
    DonorRepository donorRepository;

    public void CreateDonor(Donor donor) {
        donorRepository.save(donor);
    }

    public List<Donor> getAllDonors() {
        return donorRepository.findAll();
    }

    public void deleteDonor(int id) {
         donorRepository.deleteById(id);
    }

    public ResponseEntity<Object> updateDonor(int id, Donor donor) {
        //check if employee exist in database
        Optional<Donor> donorObje = donorRepository.findById(id);
        Donor donorDetails = donorObje.get();
        if (donorObje != null) {
            donorDetails.setEmail(donor.getEmail());
            donorDetails.setFirstName(donor.getFirstName());
            donorDetails.setId(donor.getId());
            donorDetails.setLastName(donor.getLastName());
            donorDetails.setNationalIdentityNumber(donor.getNationalIdentityNumber());
            donorDetails.setLocation(donor.getLocation());
            return new ResponseEntity<>(donorRepository.save(donor), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
