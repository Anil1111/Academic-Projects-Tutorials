package com.richard.rest.webservices.restfulwebservicesjwt.jwt.resource;

import java.io.Serializable;

public class JwtTokenRequest implements Serializable {

	private static final long serialVersionUID = -5616176897013108345L;

	private String username;
	private String password;

	// {
  //   "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTU5MjM4OTgwNiwiaWF0IjoxNTkxNzg1MDA2fQ.2XjiaqlpHwst2Jj9TyKF_EJte2i2VJ2uDW4_bntdfPepKHVdfdR2U55FhqR7K78M6WMyEkX0WNBMuTkiQboNJA"
	// }


	public JwtTokenRequest() {
		super();
	}

	public JwtTokenRequest(String username, String password) {
		this.setUsername(username);
		this.setPassword(password);
	}

	public String getUsername() {
		return this.username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}