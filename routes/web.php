<?php

use App\Http\Controllers\BuilderController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
})->name('welcome');

Route::any('editor/{page}', [BuilderController::class, 'EditorFunction'])->name('editor');
Route::any('builder/{page}', [BuilderController::class, 'BuilderControl'])->name('builder.storage');
Route::any('test/editor', [BuilderController::class, 'TestingBuilder']);
