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
        Schema::create('ordensalida', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('idventa');
            $table->date('fecha');
            $table->bigInteger('solicita');
            $table->bigInteger('autoriza');
            $table->bigInteger('recibe');
            $table->bigInteger('firmasolicita')->default(0);
            $table->bigInteger('firmaautoriza')->default(0);
            $table->bigInteger('firmarecibe')->default(0);
            $table->string('serie');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ordensalida');
    }
};
