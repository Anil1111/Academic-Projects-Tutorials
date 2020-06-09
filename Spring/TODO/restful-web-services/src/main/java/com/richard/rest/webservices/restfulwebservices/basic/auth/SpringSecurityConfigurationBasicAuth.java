package com.richard.rest.webservices.restfulwebservices.basic.auth;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;


// class added to permit all HTTP OPTION methods
@Configuration // enables spring configuration
@EnableWebSecurity // enables web security
public class SpringSecurityConfigurationBasicAuth extends WebSecurityConfigurerAdapter{

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
			.csrf().disable() // disabled CSRF
			.authorizeRequests()
			.antMatchers(HttpMethod.OPTIONS, "/**").permitAll() // permit all OPTIONS methods; to remove pre-flight CORS error from frontend
				.anyRequest().authenticated()
				.and()
			// .formLogin().and()  // disable form login
			.httpBasic();
	}
  
}