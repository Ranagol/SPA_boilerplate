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

Route::get('/{any}', function () {//we tell Laravel here to load welcome blade to any route.
    return view('welcome');//now the issuse wit this is if we additionally, later add a new any oute to the previous any route /anyRoute1/anyRoute2, Laravel will give 404. 
})->where('any', '.*');
//and this line here is the solution. We say here any where any is literally anything. We use regex here. '.' is any character, and '*' is possible more additional characters.

