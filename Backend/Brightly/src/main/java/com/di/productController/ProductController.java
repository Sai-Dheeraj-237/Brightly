package com.di.productController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
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

import com.di.productModel.Products;
import com.di.productService.ProductService;

@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/products")
@RestController


public class ProductController {
	
	@Autowired
	private ProductService productService;
	@GetMapping("/prod")
	public String product() {
		return "Prdoucts working";
	}
	
	@PostMapping("/items")
	public ResponseEntity<Boolean> items(@RequestBody Products products) {
//		----------------------------------------------------------
//		This code is used to check for the api working
		
//		System.out.println(products);
//		System.out.println(products.getName());
//		System.out.println(products.getBrand());
//		System.out.println(products.getDescription());
//		System.out.println(products.getImage());
//		System.out.println(products.getRichDescription());
//		System.out.println(products.getPrice());
//		System.out.println(products.getRating());
//		System.out.println(products.getCountInStock());
//		productService.add(products);	
//------------------------------------------------------------------------
		//This code is for showing response to the user
		
		boolean response  = productService.add(products);	

		if(response==true) {
			return new ResponseEntity<Boolean>(response, HttpStatus.OK);
		}
		
		else {
			return new ResponseEntity<Boolean>(response, HttpStatus.BAD_REQUEST);
		}
		
		
		
	}
	@GetMapping("/list")
	public ResponseEntity<List<Products>>getAllProducts(){
	List <Products> prds =	productService.get();
		return new ResponseEntity<List<Products>>(prds,HttpStatus.OK);
	}
	@PutMapping("/update")
	public void update(@RequestBody Products products) {
		System.out.println("Products are updating");
		productService.update(products);
	}
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable("id") int id) {
		productService.delete(id);
		System.out.println("DeletedSuccessfully");
		
	}
	
//	==========================================
	//DISPLAYING PRODUCTS BY ID
	@GetMapping("/byId")
	public ResponseEntity<Products>productById(@RequestBody Products products){
		Products rst  = productService.getById(products.getId());
		return new ResponseEntity<Products>(rst, HttpStatus.OK);
		
	}
	
}
