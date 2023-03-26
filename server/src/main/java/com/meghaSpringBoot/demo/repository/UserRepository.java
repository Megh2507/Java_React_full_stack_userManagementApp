package com.meghaSpringBoot.demo.repository;

import com.meghaSpringBoot.demo.modal.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {

}
