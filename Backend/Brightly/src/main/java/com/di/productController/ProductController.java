package com.di.productController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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

@RequestMapping("/products")
@RestController
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	@GetMapping("/prod")
	public String product() {
		return "Prdoucts working";
	}
	
	@PostMapping("/items")
	public void items(@RequestBody Products products) {
		System.out.println(products);
		System.out.println(products.getName());
		System.out.println(products.getBrand());
		System.out.println(products.getDescription());
		System.out.println(products.getImage());
		System.out.println(products.getRichDescription());
		System.out.println(products.getPrice());
		System.out.println(products.getRating());
		System.out.println(products.getCountInStock());
		productService.add(products);	
		
	}
	
	@GetMapping("/list")
	public  List<Products> list(){
		return productService.get();
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
	
}
