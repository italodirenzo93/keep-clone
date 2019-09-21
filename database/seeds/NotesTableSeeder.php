<?php

use App\Note;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class NotesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();
        for ($i = 0; $i < 3; $i++) {
            $note = new Note([
                'title' => $faker->sentence,
                'body' => $faker->paragraph
            ]);
            $note->save();
        }
    }
}
