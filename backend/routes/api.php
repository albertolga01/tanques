<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\VentaController;
use App\Http\Controllers\API\LoginController;
use App\Http\Controllers\API\ProductsController;
use App\Http\Controllers\API\CompraController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\OrdenVentaController;
use App\Http\Controllers\API\OrdenSalidaController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::prefix('venta')->group(function () {
    Route::get('/',[ VentaController::class, 'getAll']);
    Route::post('/',[ VentaController::class, 'create']);
    Route::delete('/{id}',[ VentaController::class, 'delete']);
    Route::get('/{id}',[ VentaController::class, 'get']);
    Route::put('/{id}',[ VentaController::class, 'update']);
});

Route::prefix('login')->group(function () { 
    Route::post('/',[ LoginController::class, 'login']); 
});

Route::prefix('productos')->group(function () {
    Route::get('/',[ ProductsController::class, 'getAll']);
    Route::post('/',[ ProductsController::class, 'create']);
    Route::delete('/{id}',[ ProductsController::class, 'delete']);
    Route::get('/{id}',[ ProductsController::class, 'get']);
    Route::put('/{id}',[ ProductsController::class, 'update']);
});



Route::prefix('compras')->group(function () {
    Route::get('/',[ CompraController::class, 'getAll']);
    Route::post('/',[ CompraController::class, 'create']);
    Route::get('/inventario',[ CompraController::class, 'inventario']);
    Route::get('/stock',[ CompraController::class, 'stock']);
    Route::get('/stockdisponible/{id}',[ CompraController::class, 'stockdisponible']);
    Route::get('/obtenerProducto/{id}',[ CompraController::class, 'obtenerProducto']);
   /* Route::delete('/{id}',[ PersonController::class, 'delete']);
    Route::get('/{id}',[ PersonController::class, 'get']);
    Route::put('/{id}',[ PersonController::class, 'update']);*/
});

Route::prefix('usuarios')->group(function () {
    Route::get('/',[ UserController::class, 'getAll']); 
    Route::post('/',[ UserController::class, 'create']);
});

Route::prefix('ordenVenta')->group(function () {
    Route::get('/',[ OrdenVentaController::class, 'getAll']); 
    Route::post('/',[ OrdenVentaController::class, 'create']);
    Route::get('/detalle/{id}',[ OrdenVentaController::class, 'get']);
    Route::get('/firmarSolicitaOrdenVenta/{id}',[ OrdenVentaController::class, 'firmarSolicitaOrdenVenta']);
    Route::get('/firmarAutorizaOrdenVenta/{id}',[ OrdenVentaController::class, 'firmarAutorizaOrdenVenta']);
    
});

Route::prefix('ordenSalida')->group(function () {
    Route::get('/',[ OrdenSalidaController::class, 'getAll']); 
    Route::post('/',[ OrdenSalidaController::class, 'create']);
    Route::get('/detalle/{id}',[ OrdenSalidaController::class, 'get']);
    Route::get('/firmarSolicitaOrdenSalida/{id}',[ OrdenSalidaController::class, 'firmarSolicitaOrdenSalida']);
    Route::get('/firmarAutorizaOrdenSalida/{id}',[ OrdenSalidaController::class, 'firmarAutorizaOrdenSalida']);

});