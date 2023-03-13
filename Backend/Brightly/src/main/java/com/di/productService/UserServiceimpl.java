package com.di.productService;

import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.di.BrightlyExceptions.UserNotFound;
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

	@Transactional
	public User getById(long id) {
		// TODO Auto-generated method stub
		return userDAO.getById(id);
	}
	
	@Override
	@Transactional
	public void delete(int id) {
		// TODO Auto-generated method stub
		userDAO.delete(id);
	}

	@Override
	public boolean adds(User user) {
		// TODO Auto-generated method stub
		return userDAO.adds(user);
	}

	

	

	

}
