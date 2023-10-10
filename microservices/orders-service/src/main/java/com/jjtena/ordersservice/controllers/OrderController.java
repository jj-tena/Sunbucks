package com.jjtena.ordersservice.controllers;

import com.jjtena.ordersservice.model.dtos.OrderRequest;
import com.jjtena.ordersservice.model.dtos.OrderResponse;
import com.jjtena.ordersservice.service.OrderService;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/order")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    @CircuitBreaker(name = "orders-service", fallbackMethod = "placeOrderFallback")
    public ResponseEntity<OrderResponse> addOrder(@RequestBody OrderRequest orderRequest){
        OrderResponse order = this.orderService.addOrder(orderRequest);
        return ResponseEntity.ok(order);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<OrderResponse> getOrders(){
        return this.orderService.getOrders();
    }

    private ResponseEntity<OrderResponse> placeOrderFallback(OrderRequest orderRequest, Throwable throwable) {
        return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE).build();
    }
}
