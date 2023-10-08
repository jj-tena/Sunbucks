package com.jjtena.ordersservice.service;

import com.jjtena.ordersservice.model.dtos.OrderItemRequest;
import com.jjtena.ordersservice.model.dtos.OrderRequest;
import com.jjtena.ordersservice.model.entities.Order;
import com.jjtena.ordersservice.model.entities.OrderItem;
import com.jjtena.ordersservice.repositories.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;

    public void addOrder(OrderRequest orderRequest) {
        Order order = new Order();
        order.setOrderNumber(UUID.randomUUID().toString());
        order.setOrderItems(orderRequest.getOrderItemRequests().stream()
                .map(orderItemRequest -> mapOrderItemRequestToOrderItem(orderItemRequest, order))
                .toList());
        this.orderRepository.save(order);
    }

    private OrderItem mapOrderItemRequestToOrderItem(OrderItemRequest orderItemRequest, Order order) {
        return OrderItem.builder()
                .id(orderItemRequest.getId())
                .sku(orderItemRequest.getSku())
                .price(orderItemRequest.getPrice())
                .quantity(orderItemRequest.getQuantity())
                .order(order)
                .build();
    }


}
