<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserContentChunks extends Model
{
    protected $table = 'user_content_chunks';

    protected $fillable = ['chunk', 'chunk_order', 'content_id'];
}
