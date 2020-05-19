<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', function () {
    return view('app');
});
// Route::view('/{path?}', 'app');
Route::resource('user_json', 'UserController');

/*
+--------+-----------+----------------------------+-------------------+---------------------------------------------+--------------+
| Domain | Method    | URI                        | Name              | Action                                      | Middleware   |
+--------+-----------+----------------------------+-------------------+---------------------------------------------+--------------+
|        | GET|HEAD  | /                          |                   | Closure                                     | web          |
|        | GET|HEAD  | api/user                   |                   | Closure                                     | api,auth:api |
|        | GET|HEAD  | user_json                  | user_json.index   | App\Http\Controllers\UserController@index   | web          |
|        | POST      | user_json                  | user_json.store   | App\Http\Controllers\UserController@store   | web          |
|        | GET|HEAD  | user_json/create           | user_json.create  | App\Http\Controllers\UserController@create  | web          |
|        | GET|HEAD  | user_json/{user_json}      | user_json.show    | App\Http\Controllers\UserController@show    | web          |
|        | PUT|PATCH | user_json/{user_json}      | user_json.update  | App\Http\Controllers\UserController@update  | web          |
|        | DELETE    | user_json/{user_json}      | user_json.destroy | App\Http\Controllers\UserController@destroy | web          |
|        | GET|HEAD  | user_json/{user_json}/edit | user_json.edit    | App\Http\Controllers\UserController@edit    | web          |
+--------+-----------+----------------------------+-------------------+---------------------------------------------+--------------+

 */
