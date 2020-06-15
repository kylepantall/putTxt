<?php

use App\User;
use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

/*
|--------------------------------------------------------------------------
| Console Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of your Closure based console
| commands. Each Closure is bound to a command instance allowing a
| simple approach to interacting with each command's IO methods.
|
*/

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->describe('Display an inspiring quote');


Artisan::command('create:admin', function () {
    User::where('email', 'kylepantall@outlook.com')->delete();
    $user = new User([
        'name' => 'Kyle Pantall',
        'email' => 'kylepantall@outlook.com',
        'password' => 'password1234'
    ]);

    $user->save();
    $this->comment('Created admin account');
});
