package com.jjtena.ordersservice.model.dtos;

public record OrderItemResponse(Long id, String sku, Double price, Long quantity) {
}
