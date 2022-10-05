package ua.lviv.iot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ua.lviv.iot.models.Equipment;
@Repository
public interface EquipmentRepository extends JpaRepository<Equipment, Long>{
    public Equipment findByName(String name);
}
