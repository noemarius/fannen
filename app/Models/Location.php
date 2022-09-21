<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    use HasFactory;

    function categorie()
    {
        return $this->belongsToMany(Categorie::class, 'location__categories');
    }
}
