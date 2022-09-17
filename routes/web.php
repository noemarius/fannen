<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;


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
    return ['Laravel' => app()->version()];
});

//Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
/* Route::get('/', function () {
    return view('home');
}); */

Route::get('/administrator', [AdminController::class, 'index']);
Route::post('/administrator', [AdminController::class, 'store']);
require __DIR__ . '/auth.php';
