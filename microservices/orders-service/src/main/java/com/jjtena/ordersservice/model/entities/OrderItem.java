package com.jjtena.ordersservice.model.entities;

import jakarta.persistence.*;
import lombok.*;
import org.aspectj.weaver.ast.Or;

@Entity
@Table
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OrderItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String sku;
    private Double price;
    private Long quantity;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;
}
