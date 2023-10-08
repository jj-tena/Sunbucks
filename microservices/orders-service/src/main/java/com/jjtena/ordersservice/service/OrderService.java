package com.jjtena.ordersservice.service;

import com.jjtena.ordersservice.model.dtos.BaseResponse;
import com.jjtena.ordersservice.model.dtos.OrderItemRequest;
import com.jjtena.ordersservice.model.dtos.OrderRequest;
import com.jjtena.ordersservice.model.entities.Order;
import com.jjtena.ordersservice.model.entities.OrderItem;
import com.jjtena.ordersservice.repositories.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private final WebClient.Builder webClientBuilder;

    public void addOrder(OrderRequest orderRequest) {
        BaseResponse baseResponse = checkInventory(orderRequest.getOrderItemRequests());
        if (baseResponse != null && !baseResponse.hasErrors()) {
            Order order = new Order();
            order.setOrderNumber(UUID.randomUUID().toString());
            order.setOrderItems(orderRequest.getOrderItemRequests().stream()
                    .map(orderItemRequest -> mapOrderItemRequestToOrderItem(orderItemRequest, order))
                    .toList());
            this.orderRepository.save(order);
        } else {
            throw new IllegalArgumentException("Some of the products are not in stock");
        }
    }

    private BaseResponse checkInventory(List<OrderItemRequest> orderItemRequests) {
        return this.webClientBuilder.build()
                .post()
                .uri("http://localhost:8083/api/inventory/in-stock")
                .bodyValue(orderItemRequests)
                .retrieve()
                .bodyToMono(BaseResponse.class)
                .block();
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
