package com.meghaSpringBoot.demo.controller;

import com.meghaSpringBoot.demo.exception.UserNotFound;
import com.meghaSpringBoot.demo.modal.User;
import com.meghaSpringBoot.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5173")
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @PostMapping("/user")
    User newUser(@RequestBody User newUser){
        return userRepository.save(newUser);
    }
    @GetMapping("/users")
    List<User> getAllUsers(){
        return  userRepository.findAll();
    }
    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id){
        return userRepository.findById((id)).orElseThrow(()->new UserNotFound(id));
    }
    @PutMapping("/user/update/{id}")
    User updateUser(@RequestBody User newUser,@PathVariable Long id){
        return userRepository.findById(id)
                .map(user -> {
                    user.setUsername(newUser.getUsername());
                    user.setName(newUser.getName());
                    user.setEmail(newUser.getEmail());
                    return  userRepository.save(user);
                }).orElseThrow(()->new UserNotFound(id));
    }
    @DeleteMapping("/user/delete/{id}")
    String deleteUser(@PathVariable Long id){
        if(!userRepository.existsById((id))){
            throw new UserNotFound(id);
        }
        userRepository.deleteById(id);
        return "user successfully deleted of id " + id;
    }



}
