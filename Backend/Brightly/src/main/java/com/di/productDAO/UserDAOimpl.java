package com.di.productDAO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.di.productModel.Products;
import com.di.productModel.User;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.query.Query;

import jakarta.persistence.EntityManager;

@Repository
public class UserDAOimpl implements UserDAO {

	@Autowired
	EntityManager entityManager;
	


	@Override
	public boolean add(User user) {
		// TODO Auto-generated method stub
		Session session = entityManager.unwrap(Session.class);
		boolean status = false;
		List<User> list = get();
		System.out.println("Before Size" + list.size());
		
		session.save(user); //THIS WILL ADD PRODUCTS 

		List<User> list1 = get();
		System.out.println("Updated Size" + list1.size());
		
		if((list.size()+1)==list1.size()) {
			status = true; 
		}
		
		return status;
		
	}

	@Override
	public List<User> get() {
		// TODO Auto-generated method stub
		Session unwrap = entityManager.unwrap(Session.class);
		String s = "from User";
		Query<User> query = unwrap.createQuery(s,User.class);
		List<User> list = query.getResultList();
		return list;
		
	}

	

	@Override
	public void update(User user) {
		// TODO Auto-generated method stub
		Session upd = entityManager.unwrap(Session.class);
		System.out.println("USERDAO UPDATING");
		upd.update(user);
		
	}


	@Override
	public User getById(int id) {
	Session uId = entityManager.unwrap(Session.class);
	User load = uId.load(User.class, id);
		return load;
	}
	
	

}
