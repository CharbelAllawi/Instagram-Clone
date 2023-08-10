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

    public function post(Request $request)
    {
        $user = JWTAuth::user();
        $post = new Post([
            'user_id' => $user->id,

            'image_url' => $request->image_url,
            'likes_count' => 0
        ]);
        $post->save();

        return response()->json(['message' => 'Post created'], 201);
    }



    function getUserPosts()
    {
        $user = JWTAuth::user();

        $userid = $user->pluck('id');

        $posts = Post::whereIn('user_id', $userid)->get();



        return response()->json([
            'status' => 'success',
            'posts' => $posts,
        ]);
    }
    public function getUserPostsByID(Request $request)
    {
        $requestingUser = JWTAuth::user();
        $userId = $request->user_id;

        if ($requestingUser->following()->where('following_id', $userId)->exists()) {
            $posts = Post::where('user_id', $userId)->get();

            return response()->json([
                'id' => $userId,
                'status' => 'success',
                'posts' => $posts,
            ]);
        } else {
            return response()->json(['message' => 'Unauthorized to view posts'], 403);
        }
    }
}
