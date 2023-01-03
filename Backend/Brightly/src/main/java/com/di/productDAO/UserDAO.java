package com.di.productDAO;

import java.util.List;

import com.di.productModel.User;

public interface UserDAO {
	public boolean add(User user);
	
	public List<User>get();
	
	public void update(User user);

	public User getById(int id);

}
