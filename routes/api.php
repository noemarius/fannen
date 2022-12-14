<?php

use App\Http\Controllers\CategorieController;
use App\Http\Controllers\CitieController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\LocationCategorieController;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\LocationEventController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TestController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('test', TestController::class);
//Route::middleware(['auth:sanctum'])->resource('test', TestController::class);
/* Route::resource('comment-all', CommentController::class);
Route::resource('categories-all', CategorieController::class);
Route::resource('location-all', LocationController::class);
Route::resource('user-all', UserController::class); */

Route::resource('comments', CommentController::class);
Route::resource('categories', CategorieController::class);
Route::resource('locations', LocationController::class);
Route::resource('users', UserController::class);
Route::resource('events', EventController::class);
Route::resource('cities', CitieController::class);

Route::get('locsandcategs', [LocationCategorieController::class, 'index']);
Route::get('locsandcategs/city/{id}', [LocationCategorieController::class, 'show']);
Route::get('locsandevents', [LocationEventController::class, 'index']);
Route::get('locsandevents/city/{id}', [LocationEventController::class, 'show']);
Route::get('eventslocsandcomments/{id}', [EventController::class, 'getEventComment']);
Route::get('events/details/{id}', [EventController::class, 'getEventLocationCategories']);
Route::put('updatename/{id}', [UserController::class, 'updatename']);
Route::put('updateemail/{id}', [UserController::class, 'updateemail']);
Route::put('updatepassword/{id}', [UserController::class, 'updatepassword']);

