<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Models\User;
use Illuminate\Support\Facades\DB;


class UserController extends Controller
{
    public function getAll(){
        $data = DB::select("SELECT id, name, email from users
        ");
        return response()->json($data, 200);
      }

      public function create(Request $request){
        $data['name'] = $request['name'];
        $data['email'] = $request['email'];
        $data['password'] = $request['password'];
        $data['firma'] = $request->file('firma')->getClientOriginalName();
       
        if($request->file('firma')->move(base_path('\img'), $request->file('firma')->getClientOriginalName())){
            User::create($data);
            return response()->json([
                'message' => "Successfully created",
                'success' => true
            ], 200);
        }else{
            return "Error";
        }
        
        
      }
}
