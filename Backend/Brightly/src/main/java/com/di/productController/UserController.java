package com.di.productController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.di.productModel.User;
import com.di.productService.UserService;

@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/user")
@RestController

public class UserController {
	
	@Autowired
	private UserService userService;
	
	
//	@GetMapping("/prod")
//	public String product() {
//		return "Prdoucts working";
//	}
	
	@PostMapping("/users")
	public ResponseEntity<Boolean> register(@RequestBody User user) {
		
		boolean response  = userService.add(user);	

		if(response==true) {
			return new ResponseEntity<Boolean>(response, HttpStatus.OK);
		}
		
		else {
			return new ResponseEntity<Boolean>(response, HttpStatus.BAD_REQUEST);
		}
		
		
		
	}
	
	
	@PostMapping("/login")
	public ResponseEntity<Boolean> logins(@RequestBody User user) {
		
		boolean response  = userService.equals(user);	

		if(response==true) {
			return new ResponseEntity<Boolean>(response, HttpStatus.OK);
		}
		
		else {
			return new ResponseEntity<Boolean>(response, HttpStatus.BAD_REQUEST);
		}
		
		
		
	}
	
	
	@GetMapping("/list")
	public ResponseEntity<List<User>>getAllUser(){
		List<User> usr = userService.get();
		return new ResponseEntity<List<User>>(usr, HttpStatus.OK);
	}
	
	@PutMapping("/update")
	public void update(@RequestBody User user) {
		System.out.println("Products are updating");
		userService.update(user);
	}
	
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable("id") int id) {
		userService.delete(id);
		System.out.println("DeletedSuccessfully");
		
	}
	
	
	
//	==========================================
	//DISPLAYING USERS BY ID
	
	@GetMapping("/byId")
	public ResponseEntity<User>getUserById(@RequestBody User user){
		User rst = userService.getById(user.getUserId());
		return new ResponseEntity<User>(rst, HttpStatus.OK);
	}
	
//===============================================================
	//LOGIN USERS
	
	
	
}
