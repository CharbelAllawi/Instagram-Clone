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



    function    getUserPosts()
    {
        $user = JWTAuth::user();



        $posts = Post::where('user_id', $user->id)->get();



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


    public function like(Request $request)
    {
        $user = JWTAuth::user();

        if ($user) {
            $postId = $request->input('post_id');
            $post = Post::find($postId);

            if ($post) {
                $existingLike = $post->likes()->where('user_id', $user->id)->first();

                if (!$existingLike) {
                    $like = new Like(['user_id' => $user->id]);
                    $post->likes()->save($like);
                    $post->increment('likes_count');
                    return response()->json(['message' => 'Post liked successfully']);
                }
            } else {
                return response()->json(['message' => 'Post not found'], 404);
            }
        } else {
            return response()->json(['message' => 'Unauthorized'], 401);
        }
    }

    public function checklike(Request $request)
    {
        $user = JWTAuth::user();

        if ($user) {
            $postId = $request->input('post_id');
            $post = Post::find($postId);

            if ($post) {
                $existingLike = $post->likes()->where('user_id', $user->id)->first();

                if ($existingLike) {

                    return response()->json(['message' => 'already liked']);
                }
            } else {
                return response()->json(['message' => 'Post not found'], 404);
            }
        } else {
            return response()->json(['message' => 'Unauthorized'], 401);
        }
    }
    public function unlike(Request $request)
    {
        $user = JWTAuth::user();

        if ($user) {
            $postId = $request->input('post_id');
            $post = Post::find($postId);

            if ($post) {
                $existingLike = $post->likes()->where('user_id', $user->id)->first();
                if ($existingLike) {
                    $existingLike->delete();
                    $post->decrement('likes_count');
                    return response()->json(['message' => 'Post unliked successfully']);
                } else {
                    return response()->json(['message' => 'You have not liked this post'], 404);
                }
            } else {
                return response()->json(['message' => 'Post not found'], 404);
            }
        } else {
            return response()->json(['message' => 'Unauthorized'], 401);
        }
    }
}
