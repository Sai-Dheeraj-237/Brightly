package com.di.productModel;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Products {

//	@Column
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	@Column
	private String name;
	@Column
	private String description;
	@Column
	private String richDescription;
	@Column
	private String image;
	@Column
	private String brand;
	@Column
	private int price;
	@Column
	private int countInStock;
	@Column
	private String rating;
	
	
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getRichDescription() {
		return richDescription;
	}
	public void setRichDescription(String richDescription) {
		this.richDescription = richDescription;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public int getCountInStock() {
		return countInStock;
	}
	public void setCountInStock(int countInStock) {
		this.countInStock = countInStock;
	}
	public String getRating() {
		return rating;
	}
	public void setRating(String rating) {
		this.rating = rating;
	}
	
	@Override
	public String toString() {
		return "Products [id=" + id + ", name=" + name + ", description=" + description + ", richDescription="
				+ richDescription + ", image=" + image + ", brand=" + brand + ", price=" + price + ", countInStock="
				+ countInStock + ", rating=" + rating + "]";
	}
	
	
	
	
	
	
	
	
}
