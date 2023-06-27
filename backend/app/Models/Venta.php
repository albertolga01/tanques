<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Venta extends Model
{
    use HasFactory;

    protected $table = "venta";

    protected $fillable = [
      'fecha',
      'almacen',
      'destino', 
      'notaventa',
      'nombre',
      'idproducto',
      'idcompra',
      'cantidad',
      'costounitario',
      'tipo',
      'factura',
      'clientecolaborador',
      'datosfacturacion',
      'observaciones',
      'departamento',
      'solicita',
      'autoriza',
      'formapago',
      'plazo',
    ];
}
