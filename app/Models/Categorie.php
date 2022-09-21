<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categorie extends Model
{
    use HasFactory;

    function location()
    {
        return $this->belongsToMany(Location::class, 'location_categories');
    }
}
