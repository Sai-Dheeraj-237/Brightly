package com.di.productService;

import java.util.List;

import com.di.productModel.Products;

public interface ProductService {
	
	public boolean add(Products products);
	
	public List<Products> get();
	public void delete(int id);
	public void update (Products products);

	public Products getById(int id);

}
