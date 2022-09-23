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
        return DB::table('locations')->select('*')->join('location__categories', 'locations.id', '=', 'location__categories.location_id')->join('categories', 'location__categories.categorie_id', '=', 'categories.id')->select('categories.id', 'categories.name as categ_name', 'locations.*')->get()->groupBy('categ_name');
    }
    public function show($cityId)
    {
        return DB::table('locations')->select('*')->join('location__categories', 'locations.id', '=', 'location__categories.location_id')->join('categories', 'location__categories.categorie_id', '=', 'categories.id')->select('categories.id', 'categories.name as categ_name', 'locations.*')->where('locations.city_id', '=', $cityId)->get()->groupBy('categ_name');
    }
}
