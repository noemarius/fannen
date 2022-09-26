<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Citie>
 */
class CitieFactory extends Factory
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
            'geo' => json_encode(['lat' => fake()->latitude(49.60, 49.65), 'lng' => fake()->longitude(6.120, 6.150)])
        ];
    }
}
