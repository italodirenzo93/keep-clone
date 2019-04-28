<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Faker\Generator;

use App\Note;

class NotesController extends Controller
{
    public function create(Generator $faker)
    {
        $note = new Note();
        $note->title = $faker->sentence;
        $note->body = $faker->paragraph;
        $note->save();
        return response($note->jsonSerialize(), Response::HTTP_CREATED);
    }

    // public function create(Request $request)
    // {
    //     $note = new Note();
    //     $note->title = $request->title;
    //     $note->body = $request->body;
    //     $note->save();
    //     return response($note->jsonSerialize(), Response::HTTP_CREATED);
    // }

    public function index()
    {
        return response(Note::all()->jsonSerialize(), Response::HTTP_OK);
    }

    public function update(Request $request, $id)
    {
        $note = Note::findOrFail($id);
        $note->title = $request->title;
        $note->body = $request->body;
        $note->save();
        return response($note->jsonSerialize(), Response::HTTP_OK);
    }

    public function delete($id)
    {
        Note::destroy($id);
        return response(null, Response::HTTP_OK);
    }
}
