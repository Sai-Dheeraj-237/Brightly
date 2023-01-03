package com.di.productService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.di.productDAO.UserDAO;
import com.di.productModel.User;

import jakarta.transaction.Transactional;

@Service
public class UserServiceimpl implements UserService {
	
	@Autowired
	UserDAO userDAO;

	@Override
	@Transactional
	public boolean add(User user) {
		// TODO Auto-generated method stub
		System.out.println("CONTROLL NOW IN Products SERVICE:" + user);

		return userDAO.add(user);
		
	}

	@Override
	@Transactional
	public List<User> get() {
		// TODO Auto-generated method stub
		return userDAO.get();
	}

	

	@Override
	@Transactional
	public void update(User user) {
		// TODO Auto-generated method stub
		userDAO.update(user);
		
	}

	@Override
	@Transactional
	public User getById(int id) {
		// TODO Auto-generated method stub
		return userDAO.getById(id);
	}

}
