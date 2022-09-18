<?php

namespace App\Http\Controllers;

use App\Models\Categorie;
use App\Models\Location;
use App\Models\Location_Categorie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LocationCategorieController extends Controller
{
    //
    public function index()
    {
        return DB::table('locations')->select('*')->join('location__categories', 'locations.id', '=', 'location__categories.location_id')->join('categories', 'location__categories.categorie_id', '=', 'categories.id')->get()->groupBy('categorie_id');
    }
}
