package com.project.medicineDonation.Order;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3006")
@RestController
public class OrderController {

    @Autowired
    OrderService orderService;


    @PostMapping("/addMedicine")
    private void createOrder(@RequestBody Orders orders){
        orderService.createOrder(orders);
    }

    @GetMapping("/GetOrderDetails")
    private List<Orders> getOrder(){
        return orderService.getAllOrders();
    }

    @DeleteMapping("DeleteOrder/{id}")
    private void deleteOrder(@PathVariable int id){
        orderService.deleteOrder(id);
    }

    @PutMapping("UpdateOrderDetail/{id}")
    private ResponseEntity<Object> updateOrder(@PathVariable int id, @RequestBody Orders orders){
        return orderService.updateOrder(id, orders);
    }
}
