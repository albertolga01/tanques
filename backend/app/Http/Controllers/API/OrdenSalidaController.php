<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Models\OrdenSalida;
use Illuminate\Support\Facades\DB;

class OrdenSalidaController extends Controller
{
    //
    public function get($id){
        $data = DB::select("SELECT 
        t5.firma as firmausuariosolicita, t5.name as solicita, 
        t6.firma as firmausuarioautoriza, t6.name as autoriza, 
        t1.firmasolicita, t1.firmaautoriza, 
        t1.recibe, t1.firmarecibe, 
        t1.fecha, t1.serie, t1.id as notaventa, t2.id, t2.almacen, t2.nombre, t2.clientecolaborador, t2.cantidad, t2.costounitario, t2.datosfacturacion, t2.formapago, t2.observaciones,  
        t3.descripcion, t3.producto,
        t4.lote 
        FROM ordensalida t1 
        INNER JOIN venta t2 ON t1.idventa= t2.id 
        INNER JOIN products t3 ON t2.idproducto = t3.id 
        INNER JOIN compras t4 ON t2.idcompra = t4.id 
        INNER JOIN users t5 ON t1.solicita = t5.id 
        INNER JOIN users t6 ON t1.autoriza= t6.id 
        WHERE t1.idventa = '".$id."' 
        group by t1.id
        ");
        return response()->json($data, 200);
      }
 
      public function create(Request $request){
        $data['idventa'] = $request['idventa'];
        $data['fecha'] = $request['fecha'];
        $data['solicita'] = $request['solicita'];
        $data['autoriza'] = $request['autoriza'];
        $data['recibe'] = "0";
        $data['serie'] = $request['serie'];
       
        OrdenSalida::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
      }

      public function firmarSolicitaOrdenSalida($id){ 
        $data['firmasolicita'] = "1";
        OrdenSalida::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
    }

    public function firmarAutorizaOrdenSalida($id){ 
        $data['firmaautoriza'] = "1";
        OrdenSalida::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
    }
/*
    public function firmarRecibeOrdenSalida($id){ 
        $data['firmarecibe'] = "1";
        OrdenSalida::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
    }*/
}
