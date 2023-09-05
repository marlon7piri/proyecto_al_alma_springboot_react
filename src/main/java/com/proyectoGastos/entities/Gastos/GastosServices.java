package com.proyectoGastos.entities.Gastos;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;

@Service
@EnableTransactionManagement
@Transactional

public class GastosServices {

  HashMap<String, Object> datos = new HashMap<>();

  @Autowired
  GastosRepository gastosRepository;

  public List<Gastos> getAllGastos() {

    return gastosRepository.findAll();

  }

  public ResponseEntity<Object> saveGasto(Gastos gasto) {

    gastosRepository.save(gasto);
    return new ResponseEntity<>(gasto, HttpStatus.CREATED);
  }

  public ResponseEntity<Object> deleteGasto(Long id) {

    boolean existgasto = gastosRepository.existsById(id);
    Optional<Gastos> gastofound = gastosRepository.findById(id);

    if (!existgasto) {
      datos.put("error", true);
      datos.put("message", "No existe el id");

      return new ResponseEntity<>(datos, HttpStatus.CONFLICT);

    } else {
      gastosRepository.deleteById(id);

      datos.put("message", "Borrado correctamente");

      return new ResponseEntity<>(gastofound, HttpStatus.ACCEPTED);
    }

  }

  public Optional<Gastos> getGasto(Long id) {

    return gastosRepository.findById(id);

  }

}
