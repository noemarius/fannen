<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Event;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('user');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->role = $request->organizer;



        // Save it in the DB and check if it worked
        if ($user->save())
            return redirect('home')->with('success', 'Insert successfully');
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
        return User::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return User::find($id);
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

        $user = User::find($id);
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->role = $request->role;


        // Save it in the DB and check if it worked
        if ($user->save())
            return 'Updated successfully';
        else
            return 'Problem updating';
    }

    /**
     * Update the name in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updatename(Request $request, $id)
    {
        $user = User::find($id);
        $user->name = $request->name;


        // Save it in the DB and check if it worked
        if ($user->save())
            return 'Updated successfully';
        else
            return 'Problem updating';
    }

    /**
     * Update the email in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateemail(Request $request, $id)
    {
        $user = User::find($id);
        $user->email = $request->email;


        // Save it in the DB and check if it worked
        if ($user->save())
            return 'Updated successfully';
        else
            return 'Problem updating';
    }

    /**
     * Update the email in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updatepassword(Request $request, $id)
    {
        $user = User::find($id);
        $user->password = Hash::make($request->password);


        // Save it in the DB and check if it worked
        if ($user->save())
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
        $res = User::destroy($id);

        if ($res) {
            return back()->with('success', 'User has been delete');
        } else
            return back()->with('error', 'Delete didnt work.');
    }
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
    public function events()
    {
        return $this->hasMany(Event::class);
    }
}
