<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserContent extends Model
{
    use SoftDeletes;

    protected $table = 'user_content';

    protected $fillable = ['content_type' , 'reference_type', 'user_id'];

    public function chunks()
    {
        return $this->hasMany('App\UserContentChunks');
    }
}
