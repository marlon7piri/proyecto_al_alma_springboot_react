package com.proyectoGastos.entities.Productos;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@EnableTransactionManagement
public class ProductosServices {

  @Autowired
  private ProductosRepository productosRepository;

  public List<Productos> getAllProductosServices() {

    return productosRepository.findAll();

  }

  public Productos createProductServices(Productos producto){
    return   productosRepository.save(producto);
  }

}
