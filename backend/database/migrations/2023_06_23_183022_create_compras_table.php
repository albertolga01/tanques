<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    { 
        Schema::create('compras', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('idproducto'); 
            $table->date('fecha');
            $table->string('lote');
            $table->bigInteger('cantidad');
            $table->bigInteger('costounitario');
            $table->bigInteger('factura');
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('compras');
    }
};
