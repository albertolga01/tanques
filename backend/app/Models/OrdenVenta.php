<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrdenVenta extends Model
{
    use HasFactory;

    protected $table = "ordenventa";

    protected $fillable = [
      'id',
      'idventa',
      'fecha',
      'solicita',
      'autoriza',
      'recibe',
      'firmasolicita',
      'firmaautoriza',
      'firmarecibe'
    ];
}
