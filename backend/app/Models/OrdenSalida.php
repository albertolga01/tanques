<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrdenSalida extends Model
{
    use HasFactory;
    
    protected $table = "ordensalida";

    protected $fillable = [
      'id',
      'idventa',
      'fecha',
      'solicita',
      'autoriza',
      'recibe',
      'firmasolicita',
      'firmaautoriza',
      'firmarecibe',
      'serie'
    ];
}
