package com.project.medicineDonation.OrderedList;


import com.project.medicineDonation.OrderedList.DTO.OrderDetailsDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3006")
@RestController
public class OrderedListController {

    @Autowired
    OrderedService orderedService;


    @PostMapping("/addMedicine")
    private void CreateOrder(@RequestBody OrderedList orderedList ){
        orderedService.createOrder(orderedList);
    }

    @GetMapping("/getOrders")
    private List<OrderDetailsDto> getPatient( @RequestParam(required = false) Integer patientId){
        return orderedService.getOrders(patientId);
    }

    @DeleteMapping("deleteOrders/{id}")
    private void deletePatient(@PathVariable int id){
        orderedService.deletePatient(id);
    }

    @PutMapping("updateOrders/{id}")
    private ResponseEntity<Object> updatePatient(@PathVariable int id, @RequestBody OrderedList orderedList){
        return orderedService.updatePatient(id, orderedList);
    }

}
