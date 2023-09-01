package com.proyectoGastos.entities.Productos;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.ToString;

@Data
@Entity
@ToString
public class Productos {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  private Long id;

  @Column(name = "nombre")
  private String nombre;
  @Column(name = "categoria")
  private String categoria;
  @Column(name = "cantidad")
  private int cantidad;
  @Column(name = "precio")
  private Double precio;
  @Column(name = "preciodecompra")
  private Double preciodecompra;
  @Column(name = "unidad")
  private int unidad;

}
