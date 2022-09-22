<?php

namespace App\Http\Controllers;

use App\Models\LocationEvent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LocationEventController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return DB::table('events')->select('*', 'categories.name as categ_name')->join('categories', 'events.categorie_id', '=', 'categories.id')->join('locations', 'events.location_id', '=', 'locations.id')->get()->groupBy('categ_name');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\LocationEvent  $locationEvent
     * @return \Illuminate\Http\Response
     */
    public function show(LocationEvent $locationEvent)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\LocationEvent  $locationEvent
     * @return \Illuminate\Http\Response
     */
    public function edit(LocationEvent $locationEvent)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\LocationEvent  $locationEvent
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, LocationEvent $locationEvent)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\LocationEvent  $locationEvent
     * @return \Illuminate\Http\Response
     */
    public function destroy(LocationEvent $locationEvent)
    {
        //
    }
}
