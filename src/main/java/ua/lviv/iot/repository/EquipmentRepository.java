package ua.lviv.iot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import ua.lviv.iot.models.Equipment;
@Repository
public interface EquipmentRepository extends JpaRepository<Equipment, Long>{
    public Equipment findByName(String name);
    public List<Equipment>findEquipmentsByType(String type);
    public List<Equipment>findEquipmentsByColor(String color);
}
