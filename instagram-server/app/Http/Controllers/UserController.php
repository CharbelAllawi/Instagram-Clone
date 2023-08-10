<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\User;
use Illuminate\Http\Request;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;
use App\Models\Post;

class UserController extends Controller
{
    public function followorunfollow(Request $request)
    {
        $user = JWTAuth::user();

        if (!$user) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $followerId = $request->input('follower_id');

        if ($user->following()->where('following_id', $followerId)->exists()) {
            $user->following()->detach($followerId);
            return response()->json(['message' => 'User unfollowed successfully']);
        } else {
            $user->following()->attach($followerId);
            return response()->json(['message' => 'User followed successfully']);
        }
    }

    public function searchByName(Request $request)
    {
        $query = $request->input('name');

        $users = User::where('name', 'LIKE', "%$query%")->get();

        return response()->json([
            'status' => 'success',
            'users' => $users,
        ]);
    }
}
