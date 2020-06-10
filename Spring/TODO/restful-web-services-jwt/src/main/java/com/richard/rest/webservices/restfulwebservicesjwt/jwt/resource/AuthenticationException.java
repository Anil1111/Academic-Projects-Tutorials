package com.richard.rest.webservices.restfulwebservicesjwt.jwt.resource;

public class AuthenticationException extends RuntimeException {

	private static final long serialVersionUID = -8122540125635331508L;

	public AuthenticationException(String message, Throwable cause) {
		super(message, cause);
	}
}