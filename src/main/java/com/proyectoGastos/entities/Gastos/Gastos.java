package com.proyectoGastos.entities.Gastos;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import jakarta.persistence.Table;



import lombok.Data;


@Entity
@Table(name = "gastos")
@Data
public class Gastos {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String motivo;
  private Double monto;
  private LocalDate fecha;
  @Column(name="categoria",unique = true)
  private String categoria;

}
