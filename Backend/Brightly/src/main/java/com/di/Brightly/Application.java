package com.di.Brightly;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@RestController
@EnableConfigurationProperties
@EntityScan (basePackages = {"com.di.productModel"})
@ComponentScan(basePackages = {"com.di.productController", "com.di.productDAO","com.di.productService"})
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
	
	public WebMvcConfigurer configure() {
		return  new WebMvcConfigurer() {
			@SuppressWarnings("unused")
			public void addCorrsMapping(CorsRegistry reg) {
				reg.addMapping("/**").allowedOrigins("*");
			}
		};
	}

}
