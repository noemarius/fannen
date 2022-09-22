<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class ComAdminController extends Controller
{
    public function index()
    {
        $comment = Comment::all();
        return view('comadmin', ['comment' => $comment]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('commadmin');
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
            return back()->with('success', 'Comment was delete');
            // return redirect('flowers');
        } else
            return back()->with('error', 'Delete didnt work.');
    }

    public function validateComment($id){
        $validate = Comment::find($id);
        $validate->validation = true;
        if ($validate->save())
        return redirect('comadmin')->with('success', 'Validation successfully');
        else
            return 'Problem validation';
        
    }
}
