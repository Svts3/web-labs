package ua.lviv.iot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ua.lviv.iot.models.Equipment;
import ua.lviv.iot.service.EquipmentService;

@RestController
@RequestMapping("web/lab/v1")
@CrossOrigin
public class UserController {

    private EquipmentService service;

    @Autowired
    public UserController(EquipmentService service) {
        this.service = service;
    }

    @GetMapping("/")
    public List<Equipment> allUsers() {
        return service.findAllEquipments();
    }

    @GetMapping("/{id}")
    public Equipment findUserById(@PathVariable("id") Long id) {
        return service.findById(id);
    }

    @PostMapping("/")
    public Equipment saveUser(@RequestBody Equipment user) {
        return service.saveEquipment(user);
    }

    @PutMapping("/{id}")
    public Equipment updateUser(@PathVariable("id") Long id, @RequestBody Equipment user) {
        return service.updateEquipment(id, user);
    }

    @DeleteMapping("/{id}")
    public Equipment deleteUser(@PathVariable Long id) {
        return service.deleteEquipment(id);
    }

}
