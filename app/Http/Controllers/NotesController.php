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
        $note->title = $faker->lexify('????????');
        $note->body = $faker->lexify('??????????????????????????????????????????????????????????');
        $note->save();
        return response($note->jsonSerialize(), Response::HTTP_CREATED);
    }

    public function index()
    {
        return response(Note::all()->jsonSerialize(), Response::HTTP_OK);
    }

    public function update(Request $request, $id)
    {

    }

    public function delete($id)
    {
        Note::destroy($id);
        return response(null, Response::HTTP_OK);
    }
}
