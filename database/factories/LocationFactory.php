<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Location>
 */
class LocationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'city_id' => fake()->numberBetween(1, 5),
            'name' => fake()->sentence(1),
            'address' => fake()->sentence(1),
            'geo' => $this->generateGeoLoc(),
            'link' => fake()->sentence(1),
            'description' => fake()->sentence(1),
            'contact' => fake()->sentence(1),
        ];
    }
    public function generateGeoLoc()
    {
        $lat = fake()->latitude(49.612, 49.615);
        $lng = fake()->longitude(6.120, 6.150);
        $geoloc = ["lat" => $lat, "lng" => $lng];
        return json_encode($geoloc);
    }
}
