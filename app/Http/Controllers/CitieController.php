<?php

namespace App\Http\Controllers;

use App\Models\Citie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CitieController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return Citie::all();
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($id)
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
     * @param  \App\Models\Citie  $citie
     * @return \Illuminate\Http\Response
     */
    public function show($citie)
    {
        //
        return Citie::find($citie);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Citie  $citie
     * @return \Illuminate\Http\Response
     */
    public function edit(Citie $citie)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Citie  $citie
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Citie $citie)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Citie  $citie
     * @return \Illuminate\Http\Response
     */
    public function destroy(Citie $citie)
    {
        //
    }
}
