<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;



Route::middleware(['jwt.auth'])->group(function () {
    Route::post('followunfollow', [UserController::class, 'followorunfollow']);
    Route::post('post', [UserController::class, 'post']);
    Route::get('getposts', [UserController::class, 'getUserPosts']);

    Route::get('getFollowingPosts', [UserController::class, 'getFollowingPosts']);
    Route::post('like', [UserController::class, 'like']);
    Route::post('unlike', [UserController::class, 'unlike']);
    Route::post('checklike', [UserController::class, 'checklike']);
    Route::get('getallusers', [UserController::class, 'getAllUsers']);
    Route::get('checkfollowstatus/{userId}', [UserController::class, 'checkfollowstatus']);

    Route::get('searchbyname', [UserController::class, 'searchByName']);
});

Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);
Route::post('logout', [AuthController::class, 'logout']);
Route::post('refresh', [AuthController::class, 'refresh']);
