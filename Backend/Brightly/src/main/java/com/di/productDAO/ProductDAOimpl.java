package com.di.productDAO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.di.productModel.Products;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.query.Query;

import jakarta.persistence.EntityManager;

@Repository
public class ProductDAOimpl implements ProductDAO {

	@Autowired
	EntityManager entityManager;
	


	@Override
	public boolean add(Products products) {
		// TODO Auto-generated method stub
		Session session = entityManager.unwrap(Session.class);
		boolean status = false;
		List<Products> list = get();
		System.out.println("Before Size" + list.size());
		
		session.save(products); //THIS WILL ADD PRODUCTS 

		List<Products> list1 = get();
		System.out.println("Updated Size" + list1.size());
		
		if((list.size()+1)==list1.size()) {
			status = true; 
		}
		
		return status;

		
	}

	@Override
	public List<Products> get() {
		// TODO Auto-generated method stub
		Session currentsession = entityManager.unwrap(Session.class);
		String s = "from Products";
		
//		-------------------------------------------------------
//		OLD METHOD
		Query<Products> query = currentsession.createQuery(s, Products.class);
		List<Products> products = query.getResultList();
//		-------------------------------------------------------

		
//		List<Products> products =	currentsession.createQuery(s).list();
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


	@Override
	public Products getById(int id) {
		// TODO Auto-generated method stub
		Session ups = entityManager.unwrap(Session.class);
		Products load = ups.load(Products.class, id);
		return load;
	}

}
