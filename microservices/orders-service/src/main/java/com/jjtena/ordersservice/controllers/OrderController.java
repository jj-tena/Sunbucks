package com.jjtena.ordersservice.controllers;

import com.jjtena.ordersservice.model.dtos.OrderRequest;
import com.jjtena.ordersservice.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/order")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public String addOrder(@RequestBody OrderRequest orderRequest){
        this.orderService.addOrder(orderRequest);
        return "Order added";
    }
}
