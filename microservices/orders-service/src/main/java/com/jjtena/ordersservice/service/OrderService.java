package com.jjtena.ordersservice.service;

import com.jjtena.ordersservice.model.dtos.*;
import com.jjtena.ordersservice.model.entities.Order;
import com.jjtena.ordersservice.model.entities.OrderItem;
import com.jjtena.ordersservice.repositories.OrderRepository;
import io.micrometer.observation.Observation;
import io.micrometer.observation.ObservationRegistry;
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
    private final ObservationRegistry observationRegistry;

    public void addOrder(OrderRequest orderRequest) {
        Observation inventoryObservation = Observation.createNotStarted("inventory-service", observationRegistry);
        inventoryObservation.observe(() -> {
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
        });
    }

    private BaseResponse checkInventory(List<OrderItemRequest> orderItemRequests) {
        return this.webClientBuilder.build()
                .post()
                .uri("lb://inventory-service/api/inventory/in-stock")
                .bodyValue(orderItemRequests)
                .retrieve()
                .bodyToMono(BaseResponse.class)
                .block();
    }

    public List<OrderResponse> getOrders() {
        List<Order> orders = this.orderRepository.findAll();
        return orders.stream().map(this::mapToOrderResponse).toList();
    }

    private OrderResponse mapToOrderResponse(Order order) {
        return new OrderResponse(order.getId(), order.getOrderNumber(),
                order.getOrderItems().stream().map(this::mapToOrderItemResponse).toList());
    }

    private OrderItemResponse mapToOrderItemResponse(OrderItem orderItem) {
        return new OrderItemResponse(orderItem.getId(), orderItem.getSku(),
                orderItem.getPrice(), orderItem.getQuantity());
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
