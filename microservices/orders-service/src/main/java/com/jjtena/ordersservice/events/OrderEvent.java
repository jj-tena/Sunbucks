package com.jjtena.ordersservice.events;

import com.jjtena.ordersservice.model.enums.OrderStatus;

public record OrderEvent(String orderNumber, int itemsCount, OrderStatus orderStatus) {
}
