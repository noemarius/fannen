<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CommentController extends Controller
{
    public function index()
    {
        return Comment::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('insert_comment');
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
        $comment->user_id = $request->user_id;
        $comment->comment = $request->comment;
        $comment->location_id = $request->location_id;
        $comment->event_id = $request->event_id;






        // Save it in the DB and check if it worked
        /* if ($comment->save())
            return redirect('home')->with('success', 'Insert successfully');
        else
            return 'Problem inserting'; */
        try {
            $comment->save();
            return $comment;
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

        return DB::table("comments")->join('users', 'comments.user_id', '=', 'users.id')->select('comments.id', 'users.name', 'comments.comment', 'comments.location_id', 'comments.event_id', 'comments.created_at')->where('comments.location_id', '=', $id)->whereNull('comments.event_id')->where('comments.validation', '=', true)->orderByDesc('comments.id')->get();
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
        $res = Comment::destroy($id);

        if ($res) {
            return back()->with('success', 'Comment has been delete');
        } else
            return back()->with('error', 'Delete didnt work.');
    }
    public function user()
    {
        return $this->hasOne(User::class);
    }
}
