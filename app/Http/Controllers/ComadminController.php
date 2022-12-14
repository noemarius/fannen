<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Location;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ComAdminController extends Controller
{
    public function index()
    {
        $comment = Comment::all();
        $locations = Location::all();
        $users = User::all();

        $comments = DB::table('comments')
        ->select('comments.*','users.name as user_name', 'locations.name as location_name')
        ->join('locations', 'location_id', '=', 'locations.id')
        ->join('users', 'user_id', '=', 'users.id')
        ->get();

        return view('comadmin')
        ->with(['comments' => $comments])
        ->with(['users' => $users])
        ->with(['locations' => $locations]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('comadmin');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $comment = new Comment;
        $comment->comment = $request->comment;


        // Save it in the DB and check if it worked
        if ($comment->save())
            return redirect('comadmin')->with('success', 'Insert successfully');
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
        return Comment::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return Comment::find($id);
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

        $comment = Comment::find($id);
        $comment->comment = $request->comment;


        // Save it in the DB and check if it worked
        if ($comment->save())
            return redirect('comadmin')->with('success', 'Updated successfully');
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
        $res = Comment::destroy($id);

        if ($res) {
            return back()->with('success', 'Comment has been delete');
            // return redirect('flowers');
        } else
            return back()->with('error', 'Delete didnt work.');
    }

    public function validateComment($id)
    {
        $validate = Comment::find($id);
        $validate->validation = true;
        if ($validate->save())
            return redirect('comadmin')->with('success', 'Validation successfully');
        else
            return 'Problem validation';
    }
}
