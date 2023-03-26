package com.meghaSpringBoot.demo.exception;

public class UserNotFound extends  RuntimeException{
    public  UserNotFound(Long id){
        super("User not found of id " + id );
    }
}
