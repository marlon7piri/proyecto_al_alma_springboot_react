package com.proyectoGastos.entities.Productos;

import java.util.HashMap;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/productos")
@Controller
public class ProductosControllers {

  HashMap<String, Object> datos = new HashMap<>();

  @Autowired
  private ProductosServices productosServices;

  @GetMapping()
  public List<Productos> getProducts() {
    return productosServices.getAllProductosServices();

  }

  @PostMapping(path = "/crear")
  public ResponseEntity<Object> crearProductoControllers(@RequestBody Productos producto) {
    Productos newproducto = productosServices.createProductServices(producto);

    return new ResponseEntity<>(newproducto, HttpStatus.OK);

  }

  @DeleteMapping(value = "/{idProducto}")
  public ResponseEntity<Object> deleteProductoControllers(@PathVariable("idProducto") Long idProducto) {
    return productosServices.deleteProducto(idProducto);

  }

}
