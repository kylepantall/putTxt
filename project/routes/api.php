<?php

use App\UserContent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:api')->get('/user/{userId}/content/{contentId}', function ($userId, $contentId) {

    $data = UserContent::all()
        ->where('id', $contentId)
        ->where('user_id', $userId);

    return $data->toJson();
});

// Route::post('/login', 'UserController@login');
// Route::post('/register', 'UserController@register');
// Route::get('/logout', 'UserController@logout');
