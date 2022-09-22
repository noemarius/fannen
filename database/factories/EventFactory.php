<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Event>
 */
class EventFactory extends Factory
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
            'start_date' => fake()->date(),
            'end_date' => fake()->date(),
            'event_start' => fake()->time(),
            'event_end' => fake()->time(),
            'description' => fake()->sentence(10),
            'contact' => fake()->email(),
            'price' => fake()->numberBetween(0, 50),
            'user_id' => fake()->numberBetween(1, 10),
            'categorie_id' => fake()->numberBetween(1, 10),
            'location_id' => fake()->numberBetween(1, 10)
        ];
    }
}
