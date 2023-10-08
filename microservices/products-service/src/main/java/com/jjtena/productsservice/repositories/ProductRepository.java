package com.jjtena.productsservice.repositories;

import com.jjtena.productsservice.model.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
