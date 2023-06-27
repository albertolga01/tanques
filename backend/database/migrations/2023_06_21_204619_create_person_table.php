<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('venta', function (Blueprint $table) {
            $table->id();
            $table->date('fecha');
            $table->string('almacen');
            $table->string('destino');
            $table->bigInteger('notaventa');
            $table->string('nombre');
            $table->bigInteger('idproducto');
            $table->bigInteger('idcompra');
            $table->bigInteger('cantidad');
            $table->bigInteger('costounitario');
            $table->string('tipo');
            $table->string('factura');
            $table->string('clientecolaborador');
            $table->string('datosfacturacion');
            $table->string('observaciones');
            $table->string('departamento');
            $table->string('solicita');
            $table->string('autoriza');
            $table->string('formapago');
            $table->string('plazo');
            $table->timestamps(); 
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('venta');
    }
};
