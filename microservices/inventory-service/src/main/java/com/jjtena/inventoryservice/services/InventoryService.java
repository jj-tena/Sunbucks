package com.jjtena.inventoryservice.services;

import com.jjtena.inventoryservice.model.dtos.BaseResponse;
import com.jjtena.inventoryservice.model.dtos.OrderItemRequest;
import com.jjtena.inventoryservice.model.entities.Inventory;
import com.jjtena.inventoryservice.repositories.InventoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class InventoryService {

    private final InventoryRepository inventoryRepository;

    public boolean isInStock(String sku) {
        Optional<Inventory> inventory = inventoryRepository.findBySku(sku);
        return inventory.filter(value -> value.getQuantity() > 0).isPresent();

    }

    public BaseResponse areInStock(List<OrderItemRequest> orderItemRequests) {
        ArrayList<String> errorList = new ArrayList<String>();
        List<String> skus = orderItemRequests.stream().map(OrderItemRequest::getSku).toList();
        List<Inventory> inventoryList = inventoryRepository.findBySkuIn(skus);

        orderItemRequests.forEach(orderItemRequest -> {
            Optional<Inventory> inventory = inventoryList.stream()
                    .filter(value -> value.getSku().equals(orderItemRequest.getSku()))
                    .findFirst();
            if (inventory.isEmpty()) {
                errorList.add("Product with sku " + orderItemRequest.getSku() + " does not exist");
            } else if (inventory.get().getQuantity() < orderItemRequest.getQuantity()) {
                errorList.add("Product with sku " + orderItemRequest.getSku() + " does not have stock");
            }
        });
        return !errorList.isEmpty()
                ? new BaseResponse(errorList.toArray(new String[0]))
                : new BaseResponse(null);
    }
}
