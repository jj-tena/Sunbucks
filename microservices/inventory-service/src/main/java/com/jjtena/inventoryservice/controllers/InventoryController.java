package com.jjtena.inventoryservice.controllers;

import com.jjtena.inventoryservice.model.dtos.BaseResponse;
import com.jjtena.inventoryservice.model.dtos.OrderItemRequest;
import com.jjtena.inventoryservice.repositories.InventoryRepository;
import com.jjtena.inventoryservice.services.InventoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/inventory")
@RequiredArgsConstructor
public class InventoryController {

    private final InventoryService inventoryService;

    @GetMapping("/sku")
    @ResponseStatus(HttpStatus.OK)
    public boolean isInStock(@PathVariable("sku") String sku) {
        return inventoryService.isInStock(sku);
    }

    @PostMapping("/in-stock")
    @ResponseStatus(HttpStatus.OK)
    public BaseResponse areInStock(@RequestBody List<OrderItemRequest> orderItemRequests) {
        return inventoryService.areInStock(orderItemRequests);
    }
}
