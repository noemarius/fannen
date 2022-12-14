<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\CitieSeeder;
use Database\Seeders\CategorieSeeder;
use Database\Seeders\CommentSeeder;
use Database\Seeders\LocationSeeder;
use Database\Seeders\LocationCategorieSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $this->call([CitieSeeder::class, CategorieSeeder::class, LocationSeeder::class,  EventSeeder::class, CommentSeeder::class, LocationCategorieSeeder::class]);
    }
}
