package com.di.productDAO;

import java.util.List;
import java.util.Optional;



import com.di.productModel.User;

public interface UserDAO {
	public boolean add(User user);
	
	public boolean adds(User user);

	
	public List<User>get();
	
	public void update(User user);

	public User getById(long id);
	public void delete(int id);




}
