<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\LocationEvent>
 */
class LocationEventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            //
            'name' => fake()->sentence(1),
            'date' => fake()->date(),
            'description' => fake()->sentence(10),
            'contact' => fake()->email(),
            'price' => fake()->numberBetween(0, 50),
            'categorie_id' => fake()->numberBetween(0, 10),
            'location_id' => fake()->numberBetween(0, 10)
        ];
    }
}
