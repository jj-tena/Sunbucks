package com.jjtena.ordersservice.repositories;

import com.jjtena.ordersservice.model.entities.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
