package com.proyectoGastos.entities.Gastos;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.DeleteMapping;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RestController
@RequestMapping(path = "/api/gastos")
public class GastosControllers {

  @Autowired
  private GastosServices gastosServices;

  @Autowired
  private GastosRepository gastosRepository;

  @GetMapping
  public List<Gastos> getAllGastosControllers() {
    return gastosServices.getAllGastos();
  }

  @PostMapping()
  public ResponseEntity<Object> crearGastoController(@RequestBody Gastos gasto) {

    return gastosServices.saveGasto(gasto);

  }

  @DeleteMapping(value = "/{idGasto}")
  public ResponseEntity<Object> deleteGastoController(@PathVariable("idGasto") Long idGasto) {

    return gastosServices.deleteGasto(idGasto);

  }

  @GetMapping(value = "/{idGasto}")
  public Optional<Gastos> getGastoControllers(@PathVariable Long idGasto) {
    Optional<Gastos> gastofound = gastosRepository.findById(idGasto);
    if (gastofound != null) {
      return gastofound;

    }
    return gastofound;
  }

}
