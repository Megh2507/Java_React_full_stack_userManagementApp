package com.meghaSpringBoot.demo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class UserNotFoundAdvice {
    @ResponseBody
    @ExceptionHandler(UserNotFound.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String,String> exceptionHandler(UserNotFound exception){
        Map<String,String> errorMap = new HashMap<>();
        errorMap.put("message",exception.getMessage());
        return  errorMap;
    }
}
