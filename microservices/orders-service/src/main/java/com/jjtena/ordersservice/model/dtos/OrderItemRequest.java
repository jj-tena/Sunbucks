package com.jjtena.ordersservice.model.dtos;

import com.jjtena.ordersservice.model.entities.Order;
import jakarta.persistence.*;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderItemRequest {

    private Long id;
    private String sku;
    private Double price;
    private Long quantity;

}
