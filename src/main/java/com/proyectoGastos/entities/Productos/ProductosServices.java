package com.proyectoGastos.entities.Productos;

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
@Transactional
@EnableTransactionManagement
public class ProductosServices {

  @Autowired
  private ProductosRepository productosRepository;

  HashMap<String, Object> request = new HashMap<>();

  public List<Productos> getAllProductosServices() {

    return productosRepository.findAll();

  }

  public Productos createProductServices(Productos producto) {
    return productosRepository.save(producto);
  }

  public ResponseEntity<Object> deleteProducto(Long idproducto) {
    boolean productIdFound = productosRepository.existsById(idproducto);

    if (!productIdFound) {

      request.put("error", true);
      request.put("message", "Id not found");

      return new ResponseEntity<>(request, HttpStatus.NOT_FOUND);
    } else {

      Optional<Productos> productdeleted = productosRepository.findById(idproducto);
      request.put("message", "Product deleted success");
      request.put("data", productdeleted);
      productosRepository.deleteById(idproducto);
      return new ResponseEntity<>(request, HttpStatus.OK);
    }
  }

}
