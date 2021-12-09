<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ContactController;
use App\Models\Contact;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/', [ContactController::class, 'index']);
Route::get('show/{id?}', [ContactController::class, 'show']);
Route::post('update/{id}', [ContactController::class, 'update']);
Route::put('add/', [ContactController::class, 'store']);
Route::post('delete/{id}', [ContactController::class, 'destroy']);