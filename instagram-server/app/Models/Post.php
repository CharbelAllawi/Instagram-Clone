<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
  // Relationship: Post belongs to User
  public function user()
  {
    return $this->belongsTo(User::class);
  }

  // Relationship: Post can have many likes (not implemented, but you can add a Likes table)
  public function likes()
  {
    return $this->hasMany(Like::class);
  }
}
