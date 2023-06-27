<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Models\Venta;
Use Log;
use Illuminate\Support\Facades\DB;

 

class VentaController extends Controller
{
    public function getAll(){
        $data = Venta::get();
        $data = DB::select("SELECT t1.*, t2.producto, t2.descripcion, t3.lote, ifnull(sum(t4.id),0) as ordenesventa, ifnull(sum(t5.id),0) as ordenessalida
        FROM venta t1 
        INNER JOIN products t2 ON t1.idproducto = t2.id 
        INNER JOIN compras t3 ON t1.idcompra = t3.id
        LEFT JOIN ordenventa t4 ON t1.id = t4.idventa
        LEFT JOIN ordensalida t5 ON t1.id = t5.idventa
        group by t1.id
        ");
        return response()->json($data, 200);
      }
  
      public function create(Request $request){
        $data['fecha'] = $request['fecha'];
        $data['almacen'] = $request['almacen'];
        $data['destino'] = $request['destino'];
        $data['notaventa'] = 0;
        $data['nombre'] = $request['nombre'];
        $data['idproducto'] = $request['idproducto'];
        $data['idcompra'] = $request['compra'];
        $data['cantidad'] = $request['cantidad'];
        $data['costounitario'] = $request['costounitario'];
        $data['tipo'] = $request['tipo'];
        $data['factura'] = $request['factura'];
        $data['clientecolaborador'] = $request['clientecolaborador'];
        $data['datosfacturacion'] = $request['datosfacturacion'];
        $data['observaciones'] = $request['observaciones'];
        $data['departamento'] = $request['departamento'];
        $data['solicita'] = 0;
        $data['autoriza'] = 0;
        $data['formapago'] = $request['formapago'];
        $data['plazo'] = $request['plazo'];
        Venta::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
      }
  
      public function delete($id){
        $res = Venta::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
      }
  
      public function get($id){
        //$data = Venta::find($id);
        $data = DB::select("SELECT t1.*, t2.producto, t2.descripcion, t3.lote
        FROM venta t1 
        INNER JOIN products t2 ON t1.idproducto = t2.id  
        INNER JOIN compras t3 ON t1.idcompra = t3.id  
        group by t1.id
        ");
        return response()->json($data, 200);
      }
  
      public function update(Request $request,$id){
        $data['fecha'] = $request['fecha'];
        $data['almacen'] = $request['almacen'];
        $data['destino'] = $request['destino'];
        $data['notaventa'] = $request['notaventa'];
        $data['nombre'] = $request['nombre'];
        $data['idproducto'] = $request['idproducto'];
        $data['idcompra'] = $request['compra'];
        $data['cantidad'] = $request['cantidad'];
        $data['costounitario'] = $request['costounitario'];
        $data['tipo'] = $request['tipo'];
        $data['factura'] = $request['factura'];
        $data['clientecolaborador'] = $request['clientecolaborador'];
        $data['datosfacturacion'] = $request['datosfacturacion'];
        $data['observaciones'] = $request['observaciones'];
        $data['departamento'] = $request['departamento'];
        $data['solicita'] = $request['solicita'];
        $data['autoriza'] = $request['autoriza'];
        $data['formapago'] = $request['formapago'];
        $data['plazo'] = $request['plazo'];
        Venta::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
      }
}
