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
public class EquipmentController {

    private EquipmentService service;

    @Autowired
    public EquipmentController(EquipmentService service) {
        this.service = service;
    }

    @GetMapping("/")
    public List<Equipment> allEquipments() {
        return service.findAllEquipments();
    }

    @GetMapping("/type/{type}")
    public List<Equipment> findEquipmentByType(
            @PathVariable(name = "type", required = true) String type) {
        return service.findEquipmentsByType(type);
    }
    @GetMapping("/color/{color}")
    public List<Equipment> findEquipmentByColor(
            @PathVariable(name = "color", required = true) String color) {
        return service.findEquipmentsByColor(color);
    }

    @GetMapping("/{id}")
    public Equipment findEquipmentById(@PathVariable("id") Long id) {
        return service.findById(id);
    }

    @PostMapping("/")
    public Equipment saveEquipment(@RequestBody Equipment user) {
        return service.saveEquipment(user);
    }

    @PutMapping("/{id}")
    public Equipment updateEquipment(@PathVariable("id") Long id, @RequestBody Equipment user) {
        return service.updateEquipment(id, user);
    }

    @DeleteMapping("/{id}")
    public Equipment deleteEquipment(@PathVariable Long id) {
        return service.deleteEquipment(id);
    }

}
