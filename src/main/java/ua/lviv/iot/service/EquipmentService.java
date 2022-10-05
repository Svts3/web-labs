package ua.lviv.iot.service;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ua.lviv.iot.models.Equipment;
import ua.lviv.iot.repository.EquipmentRepository;

@Service
public class EquipmentService {

    private EquipmentRepository repository;

    @Autowired
    public EquipmentService(EquipmentRepository repository) {
        this.repository = repository;
    }
    
    public List<Equipment> findAllEquipments(){
        return repository.findAll();
    }

    public Equipment saveEquipment(Equipment user) {
        return repository.save(user);
    }

    public Equipment findById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Equipment with such id was not found"));
    }
    
    public Equipment updateEquipment(Long id, Equipment equipment) {
        Equipment tempEquipment = repository.findById(id).get();
        tempEquipment.setId(id);
        tempEquipment.setName(equipment.getName());
        tempEquipment.setPrice(equipment.getPrice());
        tempEquipment.setWeight(equipment.getWeight());
        tempEquipment.setType(equipment.getType());
        return repository.save(tempEquipment);
    }
    
    public Equipment deleteEquipment(Long id) {
        Optional<Equipment> foundEquipment = repository.findById(id);
        repository.deleteById(id);
        return foundEquipment.get();
    }
}
