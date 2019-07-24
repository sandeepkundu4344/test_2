<?php

namespace App\Http\Controllers;

use App\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    
    public function index()
    {
        return Task::latest()->get();
    }
    public function store(Request $request)
    {
        // dd($request->all());
        $this->validate($request, [
            'task_name' => 'required'
        ]);
        return Task::create([ 'task_name' => request('task_name') ]);
    }
 
}
