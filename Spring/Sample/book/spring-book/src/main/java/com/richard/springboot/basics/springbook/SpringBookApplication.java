package com.richard.springboot.basics.springbook;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

	@SpringBootApplication
	public class SpringBookApplication {

		public static void main(String[] args) {
			ApplicationContext applicationContext = SpringApplication.run(SpringBookApplication.class, args);

			for (String name : applicationContext.getBeanDefinitionNames()) {
				System.out.println("#####---------#########" + name );
			}
		}

	}
