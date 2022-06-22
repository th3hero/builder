<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BuilderController extends Controller
{
    public function EditorFunction(Request $request, $page) {
        logger(json_encode($request->all()));
        return view('editor', compact('page'));
    }

    public function BuilderControl(Request $request, $page) {
        if ($request->hasFile('files')) {
            $file = $request->file('files');
            $file->move(public_path('img/storage'), $file->getClientOriginalName());
        }
        logger('request received for - '.$page.' and request details are - '.json_encode($request->all()));
        return true;
    }
}
