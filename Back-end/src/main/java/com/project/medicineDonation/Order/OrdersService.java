package com.project.medicineDonation.Order;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class OrderService {

    @Autowired
    OrderRepository orderRepository;
    public void createOrder(Orders orders) {
        orderRepository.save(orders);
    }

    public List<Orders> getAllOrders() {
        return orderRepository.findAll();
    }

    public void deleteOrder(int id) {
        orderRepository.deleteById(id);
    }

    public ResponseEntity<Object> updateOrder(int id, Orders orders) {
        //check if employee exist in database
        Optional<Orders> orderObje = orderRepository.findById(id);
        Orders ordersDetails = orderObje.get();
        if (orderObje != null) {
            return new ResponseEntity<>(orderRepository.save(ordersDetails), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
