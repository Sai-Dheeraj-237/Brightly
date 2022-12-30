package com.di.productDAO;

import java.util.List;

import com.di.productModel.Products;

public interface ProductDAO {
	public void add(Products products);
	
	public List<Products>get();
	public void delete(int id);
	public void update(Products products);

}
