<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Models\Products;
Use Log;

class ProductsController extends Controller
{
     // https://carbon.now.sh/
     public function getAll(){
        $data = Products::get();
        return response()->json($data, 200);
      }
  
      public function create(Request $request){
        $data['producto'] = $request['producto'];
        $data['capacidad'] = $request['capacidad'];
        $data['descripcion'] = $request['descripcion'];
        Products::create($data);
        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ], 200);
      }
  
      public function delete($id){
        $res = Products::find($id)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ], 200);
      }
  
      public function get($id){
        $data = Products::find($id);
        return response()->json($data, 200);
      }
  
      public function update(Request $request,$id){
        $data['producto'] = $request['producto'];
        $data['capacidad'] = $request['capacidad'];
        $data['descripcion'] = $request['descripcion'];
        Products::find($id)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ], 200);
      }
}
