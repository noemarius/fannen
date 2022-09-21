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
Route::get('/useradmin/update/{id}', [UserAdminController::class, 'update']);
Route::put('/useradmin/update/{id}', [UserAdminController::class, 'update']);
Route::get('/useradmin/delete/{id}', [UserAdminController::class, 'destroy']);
Route::get('/catadmin', [CatAdminController::class, 'index']);
Route::post('/catadmin', [CatAdminController::class, 'store']);
Route::get('/catadmin/update/{id}', [CatAdminController::class, 'update']);
Route::put('/catadmin/update/{id}', [CatAdminController::class, 'update']);
Route::get('/catadmin/delete/{id}', [CatAdminController::class, 'destroy']);
Route::get('/locadmin', [LocAdminController::class, 'index']);
Route::post('/locadmin', [LocAdminController::class, 'store']);
Route::get('/locadmin/update/{id}', [LocAdminController::class, 'update']);
Route::put('/locadmin/update/{id}', [LocAdminController::class, 'update']);
Route::get('/locadmin/delete/{id}', [LocAdminController::class, 'destroy']);
Route::get('/eventadmin', [EventAdminController::class, 'index']);
Route::post('/eventadmin', [EventAdminController::class, 'store']);
Route::get('/eventadmin/update/update/{id}', [EventAdminController::class, 'update']);
Route::put('/eventadmin/update/update/{id}', [EventAdminController::class, 'update']);
Route::get('/eventadmin/delete/{id}', [EventAdminController::class, 'destroy']);
Route::get('/comadmin', [ComAdminController::class, 'index']);
Route::post('/comadmin', [ComAdminController::class, 'store']);
Route::get('/comadmin/update/update/{id}', [ComAdminController::class, 'update']);
Route::put('/comadmin/update/update/{id}', [ComAdminController::class, 'update']);
Route::get('/comadmin/delete/{id}', [ComAdminController::class, 'destroy']);



require __DIR__ . '/auth.php';
