<?php

namespace App\Http\Controllers;

use App\Models\Citie;
use Illuminate\Http\Request;

class CitiesAdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $cities = Citie::all();
        return view('citiesadmin', ['cities' => $cities]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($id)
    {
        //
        $data = Citie::find($id);
        return view('citiesadminupdate')->with('cities', $data);
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
        $city = new Citie;
        $city->name = $request->name;
        $city->geo = $request->geo;


        // Save it in the DB and check if it worked
        if ($city->save())
            return redirect('citiesadmin')->with('success', 'Insert successfully');
        else
            return 'Problem inserting';
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        return Citie::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        return Citie::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $city = Citie::find($id);
        $city->name = $request->name;
        $city->geo = $request->geo;


        // Save it in the DB and check if it worked
        if ($city->save())
            return redirect('citiesadmin')->with('success', 'Updated successfully');
        else
            return 'Problem updating';
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $res = Citie::destroy($id);

        if ($res) {
            return back()->with('success', 'Category has been deleted');
        } else
            return back()->with('error', 'Delete didnt work.');
    }
}
