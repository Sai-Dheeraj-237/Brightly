package com.di.productService;

import java.util.List;


import com.di.productModel.User;

public interface UserService {
	
	public boolean add(User user);
	
	public boolean adds(User user);

	
	public List<User> get();
	
	public void update (User user);

	public User getById(long l);
	
	public void delete(int id);

	



}
