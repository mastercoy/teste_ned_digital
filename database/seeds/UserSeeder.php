<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder {

    public function run() {
        //
        DB::table('users')->insert([
                                       'name' => 'My name 1',
                                       'cpf' => '040.807.572-47',
                                       'phone' => '11987654321',
                                       'email' => 'myemail1@test.com.br',
                                   ]);

        DB::table('users')->insert([
                                       'name' => 'My name 2',
                                       'cpf' => '777.975.841-92',
                                       'phone' => '11987654321',
                                       'email' => 'myemail2@test.com.br',
                                   ]);

        DB::table('users')->insert([
                                       'name' => 'My name 3',
                                       'cpf' => '454.867.376-88',
                                       'phone' => '11987654321',
                                       'email' => 'myemail3@test.com.br',
                                   ]);


    }
}
