package com.di.productService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.di.productDAO.ProductDAO;
import com.di.productModel.Products;

import jakarta.transaction.Transactional;

@Service
public class ProductServiceimpl implements ProductService {
	
	@Autowired
	ProductDAO productDAO;

	@Override
	@Transactional
	public void add(Products products) {
		// TODO Auto-generated method stub
		System.out.println("CONTROLL NOW IN Products SERVICE:" + products);

		productDAO.add(products);
		
	}

	@Override
	@Transactional
	public List<Products> get() {
		// TODO Auto-generated method stub
		return productDAO.get();
	}

	@Override
	@Transactional
	public void delete(int id) {
		// TODO Auto-generated method stub
		productDAO.delete(id);
	}

	@Override
	@Transactional
	public void update(Products products) {
		// TODO Auto-generated method stub
		productDAO.update(products);
		
	}

}
