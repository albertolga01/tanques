<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Models\Compra;
use Illuminate\Support\Facades\DB;

class CompraController extends Controller
{
    // https://carbon.now.sh/
    public function getAll(){
        //$data = Compra::get();
        $data =  Compra::select('*')
                    ->join('products AS p','compras.idproducto','=','p.id')
                    ->get();
        return response()->json($data, 200);
      }
 
      public function create(Request $request){
        $data['idproducto'] = $request['producto'];
        $data['fecha'] = $request['fecha'];
        $data['lote'] = $request['lote'];
        $data['cantidad'] = $request['cantidad'];
        $data['costounitario'] = $request['costounitario'];
        $data['factura'] = $request['factura'];
        Compra::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
      }

      public function inventario(){
        //$data = Compra::get();
        /*$data =  DB::table('compras')
                    ->join('products AS p','compras.idproducto','=','p.id')
                    ->leftjoin('venta AS v','compras.id','=','v.idcompra')
                    ->select('compras.*, p.*')
                    ->get();
*/
        $data = DB::select("SELECT t1.*, t2.producto, t2.descripcion, ifnull(sum(t3.cantidad),0) as vendido 
        FROM compras t1 
        INNER JOIN products t2 ON t1.idproducto = t2.id 
        LEFT JOIN venta t3 ON t1.id = t3.idcompra 
        group by t1.id
        ");
        return response()->json($data, 200);
      }

      public function stock(){ 
        //where restante > 0
        $data = DB::select("SELECT t1.lote, t1.id, t2.producto, (t1.cantidad - ifnull(sum(t3.cantidad),0)) as disponible 
        FROM compras t1 
        INNER JOIN products t2 ON t1.idproducto = t2.id 
        LEFT JOIN venta t3 ON t1.id = t3.idcompra  
        group by t1.id
        ");
        return response()->json($data, 200);
        
        /*
         $results = User::where('this', '=', 1)
       ->where('that', '=', 1)
       ->where(
           function($query) {
             return $query
                    ->where('this_too', 'LIKE', '%fake%')
                    ->orWhere('that_too', '=', 1);
            })
            ->get();
             */
      }

      public function obtenerProducto($id){ 
        // $data =  Compra::get();
         $data = DB::select("SELECT t2.id, t2.producto 
         FROM compras t1 
         INNER JOIN products t2 ON t1.idproducto = t2.id  
         where t1.id = '".$id."'
         group by t1.id
         ");
         return response()->json($data, 200);
          
       }

      public function stockdisponible($id){ 
       // $data =  Compra::get();
        $data = DB::select("SELECT  (t1.cantidad - ifnull(sum(t3.cantidad),0)) as disponible 
        FROM compras t1 
        INNER JOIN products t2 ON t1.idproducto = t2.id 
        LEFT JOIN venta t3 ON t1.id = t3.idcompra 
        where t1.id = '".$id."'
        group by t1.id
        ");
        return response()->json($data, 200);
         
      }
   /*
      public function delete($id){
        $res = Compra::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
      }
  
      public function get($id){
        $data = Compra::find($id);
        return response()->json($data, 200);
      }
  
      public function update(Request $request,$id){
        $data['name'] = $request['name'];
        $data['email'] = $request['email'];
        $data['phone'] = $request['phone'];
        Compra::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
      }
      */
}
