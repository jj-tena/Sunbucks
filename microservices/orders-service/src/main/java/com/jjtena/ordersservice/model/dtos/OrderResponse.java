package com.jjtena.ordersservice.model.dtos;

import java.util.List;

public record OrderResponse(Long id, String orderNumber, List<OrderItemResponse> orderItemResponses) {
}
