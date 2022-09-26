<?php

namespace App\Http\Controllers;

use App\Models\Citie;
use App\Models\Location;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LocAdminController extends Controller
{
    public function index()
    {
        $location = Location::all();
        $cities = Citie::all();

        $location = DB::table('locations')
        ->select('locations.*','cities.name as city_name')
        ->join('cities', 'city_id', '=', 'cities.id')
        ->get();

        return view('locadmin')
            ->with (['location'=> $location])
            ->with (['cities' => $cities]);
          
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($id)
    {
        $data = Location::find($id);
        return view('locadminupdate')->with('location', $data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $location = new Location;
        $location->name = $request->name;
        $location->address = $request->address;
        $location->geo = $request->geo;
        $location->link = $request->link;
        $location->contact = $request->contact;
        $location->description = $request->description;



        // Save it in the DB and check if it worked
        if ($location->save())
            return redirect('locadmin')->with('success', 'Insert successfully');
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
        return Location::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return Location::find($id);
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
        $cities = DB::table('locations')
        ->select('locations.*','cities.name as city_name')
        ->join('cities', 'city_id', '=', 'cities.id')
        ->get();
        $location = Location::find($id);
        $location->name = $request->name;
        $cities->name = $request->name;
        $location->address = $request->address;
        $location->geo = $request->geo;
        $location->link = $request->link;
        $location->contact = $request->contact;
        $location->description = $request->description;


        // Save it in the DB and check if it worked
        if ($location->save())
            return redirect('locadmin')->with('success', 'Updated successfully');
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
        $res = Location::destroy($id);

        if ($res) {
            return back()->with('success', 'Location has been delete');
        } else
            return back()->with('error', 'Delete didnt work.');
    }
}
