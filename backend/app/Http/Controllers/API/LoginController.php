<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Models\User;
Use Log;

class LoginController extends Controller
{
    public function login(Request $request){
       $user= $request->get('user','');
       $pass= $request->get('password','');
       $data = User::where('email', $user)->where('password', $pass)->take(1)->get();
       return $data;
       if(sizeof($data) > 0){
        return $data;
       }else{
        return 0;
       }

        
      }
}
