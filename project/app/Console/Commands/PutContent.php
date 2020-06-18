<?php

namespace App\Console\Commands;

use App\UserContent;
use App\UserContentChunks;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class PutContent extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'put:content';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Puts content on database in chunks';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $email = $this->ask('Email?');
        $password = $this->secret('Your Password?');

        if (Auth::attempt(['email' => $email, 'password' => $password])) {

            $content = new UserContent([
                'content_type' => 'text/plain',
                'reference_type' => 'db_record',
                'user_id' => Auth::id()
            ]);

            var_dump($content);

            $content->save();
            $content->refresh();

            for ($i = 0; $i < 10; $i++) {
                $chunk = new UserContentChunks([
                    'chunk' => Str::random(),
                    'chunk_order' => $i,
                    'content_id' => $content->id
                ]);

                $chunk->save();
            }

        }
    }
}
