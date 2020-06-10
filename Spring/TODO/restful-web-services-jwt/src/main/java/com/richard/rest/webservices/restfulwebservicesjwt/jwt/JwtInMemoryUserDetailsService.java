package com.richard.rest.webservices.restfulwebservicesjwt.jwt;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

// alternative to a database by creating an in memory database service
@Service
public class JwtInMemoryUserDetailsService implements UserDetailsService {

	static List<JwtUserDetails> inMemoryUserList = new ArrayList<>();

	// static list of username and encrypted password that mimics the list present
	// in the DB
	static {
		inMemoryUserList.add(new JwtUserDetails(1L, "richard",
				"$2a$10$3zHzb.Npv1hfZbLEU5qsdOju/tk2je6W6PnNnY.c1ujWPcZh4PL6e", "ROLE_USER_2"));
		inMemoryUserList.add(
				new JwtUserDetails(2L, "ross", "$2a$10$TQErNXSDhuqGUDxsyNN7qeNRoagnNnPChwbLExs5tOg4ZEglH5cdW", "ROLE_USER_2"));

	}

	// method to load the respective username from the list of users
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<JwtUserDetails> findFirst = inMemoryUserList.stream().filter(user -> user.getUsername().equals(username))
				.findFirst();

		if (!findFirst.isPresent()) {
			throw new UsernameNotFoundException(String.format("USER_NOT_FOUND '%s'.", username));
		}

		return findFirst.get();
	}

}