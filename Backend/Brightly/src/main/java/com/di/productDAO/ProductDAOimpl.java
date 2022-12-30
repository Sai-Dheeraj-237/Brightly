package com.di.productDAO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.query.Query;

import com.di.productModel.Products;

import jakarta.persistence.EntityManager;

@Repository
public class ProductDAOimpl implements ProductDAO {

	@Autowired
	EntityManager entityManager;
	
	@SuppressWarnings("deprecation")
	@Override
	public void add(Products products) {
		// TODO Auto-generated method stub
		Session session = entityManager.unwrap(Session.class);
		System.out.println("ProductDAO" + products);
		session.save(products);
		
	}

	@Override
	public List<Products> get() {
		// TODO Auto-generated method stub
		Session currentsession = entityManager.unwrap(Session.class);
		String s = "from Products";
		Query<Products> query = currentsession.createQuery(s, Products.class);
		List<Products> products = query.getResultList();
		return products;
		
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		Session unwrap = entityManager.unwrap(Session.class);
		Products load = unwrap.byId(Products.class).load(id);
		unwrap.delete(load);
		System.out.println("Selection deleted");

		
		
	}

	@Override
	public void update(Products products) {
		// TODO Auto-generated method stub
		Session upd = entityManager.unwrap(Session.class);
		System.out.println("ProductDAO UPDATING");
		upd.update(products);
		
	}

}
