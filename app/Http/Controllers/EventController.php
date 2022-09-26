<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Event::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('event');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        /* dd($request); */
        $event = new Event;
        $event->name = $request->name;
        $event->start_date = $request->start_date;
        $event->end_date = $request->end_date;
        $event->event_start = $request->event_start;
        $event->event_end = $request->event_end;
        $event->description = $request->description;
        $event->contact = $request->contact;
        $event->price = $request->price;
        $event->categorie_id = $request->categorie_id;
        $event->location_id = $request->location_id;
        $event->user_id = $request->user_id;




        // Save it in the DB and check if it worked
        /* if ($event->save())
            return redirect('home')->with('success', 'Insert successfully');
        else
            return 'Problem inserting'; */
        try {
            $event->save();
            return $event;
        } catch (\Exception $e) {
            // do task when error
            return $e->getMessage();   // insert query
        };
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Event::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return Event::find($id);
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

        $event = Event::find($id);
        $event->name = $request->name;
        $event->start_date = $request->start_date;
        $event->end_date = $request->end_date;
        $event->event_start = $request->event_start;
        $event->event_end = $request->event_end;
        $event->description = $request->description;
        $event->contact = $request->contact;
        $event->price = $request->price;

        // Save it in the DB and check if it worked
        if ($event->save())
            return 'Updated successfully';
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
        $res = Event::destroy($id);

        if ($res) {
            return back()->with('success', 'Event has been delete');
        } else
            return back()->with('error', 'Delete didnt work.');
    }

    public function getEventComment($id)
    {
        return DB::table('comments')->join('events', 'comments.event_id', '=', 'events.id')->join('users', 'events.user_id', '=', 'users.id')->select('comments.id', 'events.location_id', 'users.name', 'comments.comment')->where('events.location_id', '=', $id)->orderByDesc('comments.id')->get();
    }

    public function getEventLocationCategories($id)
    {
        return DB::table('events')->join('locations', 'events.location_id', '=', 'locations.id')->join('users', 'events.user_id', '=', 'users.id')->join('categories', 'events.categorie_id', '=', 'categories.id')->select('events.name as event_name', 'users.name as user_name', 'categories.name as categ_name', 'locations.address', 'events.*')->where('events.id', '=', $id)->get();
    }
}
