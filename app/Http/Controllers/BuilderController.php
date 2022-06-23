<?php

namespace App\Http\Controllers;

use App\Models\Builder;
use Illuminate\Http\Request;

class BuilderController extends Controller
{
    public function EditorFunction(Request $request, $page) {
        $page = decrypt($page);
        if ($request->ajax()) {
            $build = Builder::find($page);
            $data = $request->all();
            if (count($data) !== 0) {
                return $build->update(['mix' => $request->all()]);
            } else {
                return $build->mix;
            }
        }
        return view('editor', compact('page'));
    }

    public function BuilderControl(Request $request, $page) {
        if ($request->hasFile('files')) {
            $file = $request->file('files');
            $file->move(public_path('img/storage'), $file->getClientOriginalName());
        } else {
            $data = $request->all();
            $build = Builder::find($page);
            $build->update(['html' => $data['html'], 'css' => $data['css']]);
        }
        return true;
    }

    public function TestingBuilder() {
        return view('testing.editor');
    }
}
