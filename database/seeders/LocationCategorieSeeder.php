<?php

namespace Database\Seeders;

use App\Models\Location_Categorie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LocationCategorieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Location_Categorie::factory(10)->create();
    }
}
