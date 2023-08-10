<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
  public $timestamps = false;

  protected $fillable = ['user_id', 'image_url', 'likes_count'];

  public function posts()
  {
    return $this->belongsTo(User::class);
  }
  public function likes()
  {
    return $this->hasMany(Like::class);
  }
}
