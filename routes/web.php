<?php

use App\Http\Controllers\CatAdminController;
use App\Http\Controllers\LocAdminController;
use App\Http\Controllers\CategorieController;
use App\Http\Controllers\ComAdminController;
use App\Http\Controllers\EventAdminController;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\UserAdminController;
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

/*Route::get('/', function () {
    return view('home');
});*/

Route::get('/', function () {
    return ['laravel', app()->version()];
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

Route::get('/useradmin', [UserAdminController::class, 'index']);
Route::post('/useradmin', [UserAdminController::class, 'store']);
Route::get('/useradminupdate/{id}', [UserAdminController::class, 'create']);
Route::post('/useradminupdate/{id}', [UserAdminController::class, 'update']);
Route::get('/useradmin/delete/{id}', [UserAdminController::class, 'destroy']);
Route::get('/catadmin', [CatAdminController::class, 'index']);
Route::post('/catadmin', [CatAdminController::class, 'store']);
Route::get('/catadminupdate/{id}', [CatAdminController::class, 'create']);
Route::post('/catadminupdate/{id}', [CatAdminController::class, 'update']);
Route::get('/catadmin/delete/{id}', [CatAdminController::class, 'destroy']);
Route::get('/locadmin', [LocAdminController::class, 'index']);
Route::post('/locadmin', [LocAdminController::class, 'store']);
Route::get('/locadminupdate/{id}', [LocAdminController::class, 'create']);
Route::post('/locadminupdate/{id}', [LocAdminController::class, 'update']);
Route::get('/locadmin/delete/{id}', [LocAdminController::class, 'destroy']);
Route::get('/eventadmin', [EventAdminController::class, 'index']);
Route::post('/eventadmin', [EventAdminController::class, 'store']);
Route::get('/eventadminupdate/{id}', [EventAdminController::class, 'create']);
Route::post('/eventadminupdate/{id}', [EventAdminController::class, 'update']);
Route::get('/eventadmin/delete/{id}', [EventAdminController::class, 'destroy']);
Route::get('/comadmin', [ComAdminController::class, 'index']);
Route::post('/comadmin', [ComAdminController::class, 'store']);
Route::get('/comadminevalidate/{id}', [ComAdminController::class, 'validateComment']);
Route::post('/comadminevalidate/{id}', [ComAdminController::class, 'update']);
Route::get('/comadmin/delete/{id}', [ComAdminController::class, 'destroy']);




require __DIR__ . '/auth.php';
